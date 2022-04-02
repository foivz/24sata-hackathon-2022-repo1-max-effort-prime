import { useAppDispatch, useAppSelector } from '../../../common/store';
import { selectActiveGroup } from '../store/groups';

const useGroups = () => {
  const groupState = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const selectGroup = (group: any) => {
    dispatch(selectActiveGroup(group));
  };

  return {
    selectGroup,
    activeGroup: groupState.activeGroup,
  };
};

export default useGroups;
