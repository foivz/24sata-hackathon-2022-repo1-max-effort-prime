import api from '../../../api/api';

export interface LoginBody {
  phoneNumber: string;
  password: string;
}

export const login = async (data: LoginBody) => {
  const response = await api.post('/users/login', data);
  return response.data;
};
