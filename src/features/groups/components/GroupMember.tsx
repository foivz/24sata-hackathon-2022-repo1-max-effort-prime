import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ActionButton, Avatar } from '../../../common/components';

import { TrashIcon } from '../../../common/assets/icons';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface GroupMemberProps {
  name: string;
}

const GroupMember: React.FunctionComponent<GroupMemberProps> = ({ name }) => {
  return (
    <View style={styles.flexRow}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar style={{ marginRight: 20 }} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <ActionButton icon={TrashIcon} color={colors.paradisePink} backgroundColor={colors.sentimentalPink} />
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
