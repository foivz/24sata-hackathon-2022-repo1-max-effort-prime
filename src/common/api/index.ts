import api from '../../api/api';

export const getProducts = async (query: string, userId: string) => {
  const response = await api.get(`/items?phrase=${query}&userId=${userId}`);
  return response.data.data;
};
