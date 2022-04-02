import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GroupState {
  activeGroup: any;
}

const initialState: GroupState = {
  activeGroup: null,
};

export const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    reset: () => initialState,
    selectActiveGroup: (state: GroupState, action: PayloadAction<any>) => {
      state.activeGroup = action.payload;
    },
  },
});

export const { reset, selectActiveGroup } = groupSlice.actions;
export default groupSlice.reducer;
