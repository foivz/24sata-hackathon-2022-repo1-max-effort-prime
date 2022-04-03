import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Avatar, Space } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { ChevronRightIcon } from '../../../common/assets/icons';
import { fontSize } from '../../../constants/typography';
import screen from '../../../navigation/screens';

interface GroupProps {
  group: any;
}

const Group: React.FunctionComponent<GroupProps> = ({ group }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen.SPLIT_EXPENSES_SHEET_PRICES)}>
      <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: fontSize.normal, marginBottom: 12 }}>{group.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FlatList
            horizontal
            data={group.members}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <Avatar name={`${item.firstName} ${item.lastName}`} />}
            ItemSeparatorComponent={() => <Space width={10} />}
          />
          <Icon icon={ChevronRightIcon} width={30} height={30} stroke={colors.green} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Group;
