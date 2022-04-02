import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { login, LoginBody, loginParty, LoginPartyBody, LoginResponse } from '@features/login/api/login';
import { RootState } from '../../../common/store';

interface UserState {
  signedIn: boolean;
  isRestoring: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  signedIn: false,
  isRestoring: true,
  isLoading: false,
};

export const signIn = createAsyncThunk<any, LoginBody, { state: RootState }>('user/signIn', async ({ data, type }, thunkApi) => {
  const response = await login({ ...(data as LoginBody) });

  // Something has gone wrong with login
  if (!response.isSuccess) return thunkApi.rejectWithValue(response.errorMessage);

  return {};
});

export const restoreAuth = createAsyncThunk('user/restoreAuth', async (_, { rejectWithValue }) => {
  // Get tokens from the MMKV storage
  const auth = storage.getString(StorageKey.AUTH);

  if (!auth) return rejectWithValue('No token');

  // Parse tokens
  const tokens: LoginResponse = JSON.parse(auth);

  // Add token to api header
  api.defaults.headers.common = {
    Authorization: `Bearer ${tokens.accessToken}`,
    'X-Expo-Token': mobileToken,
  };

  // Fetch user data
  const userData = await userMe();
  // Warm up the backend for data fetching
  warmUp();

  chatwootApi.defaults.headers.common = {
    api_access_token: userData.chatAccessToken,
  };

  return userData;
});

export const refetchUser = createAsyncThunk('user/refetch', async () => {
  // Fetch user data
  const user = await userMe();
  return user;
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  try {
    const mobileToken = await getExpoToken();
    logout(mobileToken);
  } catch (err) {
  } finally {
    // Clear react-query cache
    queryClient.clear();

    // Remove everything from MMKV storage
    storage.clearAll();
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.signedIn = true;
      state.user = action.payload;
      state.userType = action.payload.partyId ? 'party' : 'consultant';
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(restoreAuth.fulfilled, (state, action: PayloadAction<UserResponse>) => {
      state.signedIn = true;
      state.isRestoring = false;
      state.user = action.payload;
      state.userType = action.payload.partyId ? 'party' : 'consultant';
    });
    builder.addCase(restoreAuth.rejected, (state) => {
      state.isRestoring = false;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.signedIn = false;
    });
    builder.addCase(refetchUser.fulfilled, (state, action: PayloadAction<UserResponse>) => {
      state.user = { ...state.user, ...action.payload };
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
