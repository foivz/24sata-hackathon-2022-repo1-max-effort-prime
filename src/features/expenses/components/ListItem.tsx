import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Space } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { DotsHorizontalIcon } from '../../../common/assets/icons';

interface ListItemProps {}

const ListItem: React.FunctionComponent<ListItemProps> = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../shopping-list/assets/mleko.png')} style={{ width: 50, height: 50, marginRight: 18 }} />
        <View>
          <Text>Dukat Trajno mlijeko</Text>
          <Space height={3} />
          <Text style={{ color: colors.gray }}>3 komada</Text>
        </View>
      </View>
      <View style={{ backgroundColor: colors.textField, borderRadius: 8, padding: 9, alignSelf: 'flex-start' }}>
        <Text style={{ color: colors.gray }}>18 HRK</Text>
      </View>
    </View>
  );
};

export default ListItem;
