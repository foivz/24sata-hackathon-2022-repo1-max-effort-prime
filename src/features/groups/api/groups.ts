import api from '../../../api/api';

export const getGroups = async (userId: string) => {
  const response = await api.get(`/users/${userId}/groups`);
  return response.data.data;
};

export const createGroup = async (data) => {
  const response = await api.post('/groups', data);
  return response.data.data;
};

export const getAllUsers = async () => {
  const response = await api.get('/users/');
  return response.data.data;
};

export const getGroupMembers = async (groupId: string) => {
  const response = await api.get(`/groups/${groupId}/members`);
  return response.data.data;
};

export const deleteMember = async ({ groupId, userId }) => {
  const response = await api.delete(`/groups/${groupId}/members/${userId}`);
  return response.data.data;
};
