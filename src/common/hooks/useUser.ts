import { useAppSelector } from '../store';

const useUser = () => {
  const { user } = useAppSelector((state) => state.user);
  return user;
};

export default useUser;
