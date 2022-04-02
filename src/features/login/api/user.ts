import api from '../../../api/api';
import { ApiResponse } from '../../../common/types';

export interface LoginBody {
  phoneNumber: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export const login = async (data: LoginBody) => {
  // console.log('alo', data);
  const response = await api.post<ApiResponse<LoginResponse>>('/users/login', data);
  // console.log('ELO');
  return response.data.data;
};
