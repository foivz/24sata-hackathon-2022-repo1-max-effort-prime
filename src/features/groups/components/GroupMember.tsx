import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';

import { ActionButton, Avatar } from '../../../common/components';

import { TrashIcon } from '../../../common/assets/icons';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { deleteMember } from '../api/groups';
import useGroups from '../hooks/useGroups';

interface GroupMemberProps {
  member: any;
}

const GroupMember: React.FunctionComponent<GroupMemberProps> = ({ member }) => {
  const deleteMemberMutation = useMutation(deleteMember);
  const queryClient = useQueryClient();
  const { activeGroup } = useGroups();

  const handleDelete = async () => {
    console.log('MEMBER', `${member._id} ${activeGroup._id}`);
    deleteMemberMutation.mutate(
      { userId: member._id, groupId: activeGroup._id },
      {
        onSuccess: () => {
          console.log('success');
          // queryClient.invalidateQueries('groupMembers');
          // queryClient.invalidateQueries('groups');
        },
      },
    );
  };

  return (
    <View style={styles.flexRow}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar style={{ marginRight: 20 }} name={`${member.firstName} ${member.lastName}`} />
        <Text style={styles.title}>
          {member.firstName} {member.lastName}
        </Text>
      </View>
      <ActionButton
        icon={TrashIcon}
        color={colors.paradisePink}
        backgroundColor={colors.sentimentalPink}
        onPress={handleDelete}
        loading={deleteMemberMutation.isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
});

export default GroupMember;
