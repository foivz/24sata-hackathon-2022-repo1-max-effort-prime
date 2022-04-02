import api from '../../../api/api';

export const fetchShoppingList = async (userId: string) => {
  console.log('WAT', `/users/${userId}/shopping-list/regular`);
  const response = await api.get(`/users/${userId}/shopping-list/regular`);
  return response.data.data;
};
