import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GroupState {
  activeGroup: any;
  addedMembers: any[];
}

const initialState: GroupState = {
  activeGroup: null,
  addedMembers: [],
};

export const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    reset: () => initialState,
    selectActiveGroup: (state: GroupState, action: PayloadAction<any>) => {
      state.activeGroup = action.payload;
    },
    addMembers: (state: GroupState, action: PayloadAction<any[]>) => {
      state.addedMembers = [...state.addedMembers, ...action.payload];
    },
  },
});

export const { reset, selectActiveGroup, addMembers } = groupSlice.actions;
export default groupSlice.reducer;
