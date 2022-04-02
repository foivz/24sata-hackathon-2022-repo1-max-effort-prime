import api from '../../../api/api';

export const getExpenses = async (userId: string) => {
  const response = await api.get(`/users/${userId}/expenses`);
  return response.data.data;
};
