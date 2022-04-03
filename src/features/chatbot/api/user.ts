import api from '../../../api/api';

export const getUser = async (userId?: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data.data;
};

export const updateUser = async (userId?: string, data: any) => {
  const response = await api.put(`/users/${userId}`, data);
  return response.data.data;
};
