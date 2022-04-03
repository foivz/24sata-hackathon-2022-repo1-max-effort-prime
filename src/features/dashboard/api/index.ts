import api from '../../../api/api';

export const getDashboard = async (userId: string) => {
  const response = await api.get(`/users/${userId}/dashboard`);
  return response.data.data;
};
