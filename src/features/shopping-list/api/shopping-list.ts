import api from '../../../api/api';

export const fetchShoppingList = async (userId: string) => {
  const response = await api.get(`/users/${userId}/shopping-list/regular`);
  return response.data.data;
};

export const updateShoppingList = async (data) => {
  console.log('data', data);
  const response = await api.post(`/users/${data.userId}/shopping-list/regular`, {
    items: data.items,
    user: data.userId,
  });
  return response.data.data;
};
