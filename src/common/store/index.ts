import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import userReducer from '../../features/login/store/user';
import chatReducer from '../../features/chatbot/store/chat';
import groupsReducer from '../../features/groups/store/groups';
import expenses from '../../features/expenses/store';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    groups: groupsReducer,
    expenses,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
