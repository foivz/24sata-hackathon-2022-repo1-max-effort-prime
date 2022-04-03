import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid/non-secure';

interface ChatState {
  message: string;
  messages: any[];
}

const initialState: ChatState = {
  message: '',
  messages: [
    {
      id: nanoid(),
      type: 'received',
      message: 'Pozdrav! Ja sam tvoj chatbot Šparo! Klikni na ikonu su plusićom te odaberi kako ti mogu pomoći! 😉',
    },
  ],
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
      state.messages.push(action.payload);
    },
  },
});

export const { reset, setMessage, setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
