import { useQuery } from 'react-query';
import { getProducts } from '../api';
import useUser from './useUser';

const useSearchProduct = (searchQuery: string | null) => {
  const user = useUser();

  const query = useQuery(['productSearc', searchQuery], () => getProducts(searchQuery, user?._id), {
    enabled: !!user && searchQuery !== null,
    cacheTime: 0,
  });

  return {
    data: searchQuery === '' ? [] : query.data || [],
  };
};

export default useSearchProduct;
