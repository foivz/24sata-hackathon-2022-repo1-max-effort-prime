import api from '../../../api/api';

export const getExpenses = async (userId: string) => {
  const response = await api.get(`/users/${userId}/expenses`);
  return response.data.data;
};

export const getExpenseItems = async (expenseId: string) => {
  const response = await api.get(`/expenses/${expenseId}/items`);
  return response.data.data;
};

interface CreateExpense {
  items: {
    item: string;
    price: number;
    quantity: number;
  };
  userId: string;
}

export const createExpense = async (data: CreateExpense) => {
  console.log('BOSS', data);
  const response = await api.post(`users/${data.userId}/expenses`, { items: data.items });
  return response.data.data;
};
