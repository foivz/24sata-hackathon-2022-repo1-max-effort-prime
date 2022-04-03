import api from '../../api/api';

export const getProducts = async (query: string, userId: string) => {
  const response = await api.get(`/items?phrase=${query}&userId=${userId}`);
  return response.data.data;
};

interface CreateProductData {
  item: string;
  price: number;
  quantity: number;
}

export const createProduct = async (items: CreateProductData) => {
  console.log(2, items);
  const response = await api.post('/items', { items });
  return response.data.data;
};
