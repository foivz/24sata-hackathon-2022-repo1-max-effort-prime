import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  _id: string;
  price: number;
  quantity: number;
  name: string;
  imageUrl: string;
};

interface ExpensesState {
  items: Product[];
}

const initialState: ExpensesState = {
  items: [],
};

export const expensesSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addItem: (state: ExpensesState, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const totalPriceSelector = (state: ExpensesState) =>
  state.items.reduce((totalAmount, currentItem) => totalAmount + currentItem.price * currentItem.quantity, 0);

export const { addItem } = expensesSlice.actions;
export default expensesSlice.reducer;
