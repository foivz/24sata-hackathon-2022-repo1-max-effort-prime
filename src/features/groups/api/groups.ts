import api from '../../../api/api';

export const getGroups = async (userId: string) => {
  const response = await api.get(`/users/${userId}/groups`);
  return response.data.data;
};
