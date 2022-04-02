import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  message: string;
  messages: any[];
}

const initialState: ChatState = {
  message: '',
  messages: [],
};

export const chatSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    reset: () => initialState,
    setMessage: (state: ChatState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessages: (state: ChatState, action: PayloadAction<{ messages: any[] }>) => {
      const { messages } = action.payload;
      state.messages = messages;
    },
    addMessage: (state: ChatState, action: PayloadAction<any>) => {
      state.messages.unshift(action.payload);
    },
  },
});

export const { reset, setMessage, setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
