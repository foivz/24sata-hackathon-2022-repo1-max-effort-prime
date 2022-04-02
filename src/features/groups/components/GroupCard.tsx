import React from 'react';
import { View, Text } from 'react-native';

import { Avatar, Space } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface GroupCardProps {}

const GroupCard: React.FC<GroupCardProps> = () => {
  return (
    <View style={{ padding: 20, backgroundColor: colors.white, borderRadius: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.small }}>Obitelj</Text>
      <Space height={10} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar />
        <Space width={10} />
        <Avatar />
        <Space width={10} />
        <Avatar />
      </View>
    </View>
  );
};

export default GroupCard;
