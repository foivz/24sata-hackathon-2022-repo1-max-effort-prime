import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../common/store';
import { queryClient } from '../../../misc/queryClient';
import { login, LoginBody, LoginResponse } from '../api/user';

interface UserState {
  signedIn: boolean;
  isRestoring: boolean;
  isLoading: boolean;
  user: LoginResponse | null;
}

const initialState: UserState = {
  signedIn: false,
  isRestoring: true,
  isLoading: false,
  user: null,
};

export const signIn = createAsyncThunk<LoginResponse, LoginBody, { state: RootState }>('user/signIn', async (data, thunkApi) => {
  console.log('podaci', data);
  const response = await login(data);

  // Save to AsyncStorage
  await AsyncStorage.setItem('auth', JSON.stringify(response));

  return response;
});

export const restoreAuth = createAsyncThunk('user/restoreAuth', async (_, { rejectWithValue }) => {
  // Get tokens from the storage storage
  const auth = await AsyncStorage.getItem('auth');
  if (!auth) return rejectWithValue('No token!');

  const userData = JSON.parse(auth);

  return userData;
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  console.log('u sign out');
  // Clear react-query cache
  queryClient.clear();
  await AsyncStorage.removeItem('auth');
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.signedIn = true;
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(restoreAuth.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.signedIn = true;
      state.isRestoring = false;
      state.user = action.payload;
    });
    builder.addCase(restoreAuth.rejected, (state) => {
      state.isRestoring = false;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.signedIn = false;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
