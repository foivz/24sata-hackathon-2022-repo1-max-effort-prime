import api from '../../../api/api';

export const getExpenses = async (userId: string) => {
  const response = await api.get(`/users/${userId}/expenses`);
  return response.data.data;
};

export const getExpenseItems = async (expenseId: string) => {
  const response = await api.get(`/expenses/${expenseId}/items`);
  return response.data.data;
};
