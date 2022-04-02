import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';

import { Space } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ListItemProps {
  containerStyle?: ViewStyle;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ containerStyle }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingVertical: 15,
          paddingHorizontal: 22,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        },
        containerStyle,
      ]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../shopping-list/assets/mleko.png')} style={{ width: 50, height: 50, marginRight: 18 }} />
        <View>
          <Text style={{ fontSize: fontSize.small }}>Dukat Trajno mlijeko</Text>
          <Space height={3} />
          <Text style={{ color: colors.gray, fontSize: fontSize.small }}>3 komada</Text>
        </View>
      </View>
      <View style={{ backgroundColor: colors.whiteSmoke, borderRadius: 8, padding: 9, alignSelf: 'flex-start' }}>
        <Text style={{ color: colors.gray }}>18 HRK</Text>
      </View>
    </View>
  );
};

export default ListItem;
