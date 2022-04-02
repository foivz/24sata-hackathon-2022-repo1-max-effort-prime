import { useQuery } from 'react-query';

import useUser from '../../../common/hooks/useUser';
import { getExpenses } from '../api';

const useExpenses = () => {
  const user = useUser();
  const query = useQuery('expenses', () => getExpenses(user?._id), {
    enabled: !!user,
  });
  return query;
};

export default useExpenses;
