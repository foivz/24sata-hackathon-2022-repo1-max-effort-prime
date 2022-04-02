import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';

import { Space } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ListItemProps {
  containerStyle?: ViewStyle;
  item: any;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ containerStyle, item }) => {
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
        <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, marginRight: 18 }} />
        <View>
          <Text style={{ fontSize: fontSize.small }}>{item.name}</Text>
          <Space height={3} />
          <Text style={{ color: colors.gray, fontSize: fontSize.small }}>{item.quantity} komada</Text>
        </View>
      </View>
      <View style={{ backgroundColor: colors.whiteSmoke, borderRadius: 8, padding: 9, alignSelf: 'flex-start' }}>
        <Text style={{ color: colors.gray }}>{item.price} HRK</Text>
      </View>
    </View>
  );
};

export default ListItem;
