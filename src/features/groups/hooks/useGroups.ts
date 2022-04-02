import { useQuery } from 'react-query';

import useUser from '../../../common/hooks/useUser';
import { getGroups } from '../api/groups';

const useExpenses = () => {
  const user = useUser();
  const query = useQuery('groups', () => getGroups(user?._id), {
    enabled: !!user,
  });
  return query;
};

export default useExpenses;
