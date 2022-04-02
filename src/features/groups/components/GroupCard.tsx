import React from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { Avatar, Space } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface GroupCardProps extends TouchableOpacityProps {}

const GroupCard: React.FC<GroupCardProps> = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ padding: 20, backgroundColor: colors.white, borderRadius: 20 }} {...props}>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.small }}>Obitelj</Text>
      <Space height={10} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar />
        <Space width={10} />
        <Avatar />
        <Space width={10} />
        <Avatar />
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;
