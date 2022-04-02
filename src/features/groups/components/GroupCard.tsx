import React from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity, FlatList } from 'react-native';

import { Avatar, Space } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface GroupCardProps extends TouchableOpacityProps {
  group: any;
}

const GroupCard: React.FC<GroupCardProps> = ({ group, ...props }) => {
  console.log('group', group);
  return (
    <TouchableOpacity style={{ padding: 20, backgroundColor: colors.white, borderRadius: 20 }} {...props}>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.small }}>{group.name}</Text>
      <Space height={10} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FlatList
          horizontal
          data={group.members}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Avatar name={`${item.firstName} ${item.lastName}`} />}
          ItemSeparatorComponent={() => <Space width={10} />}
        />
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;
