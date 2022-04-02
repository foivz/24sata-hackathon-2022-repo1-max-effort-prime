import React from 'react';
import { View, Text, Image } from 'react-native';
import { DotsHorizontalIcon } from '../../../common/assets/icons';
import { Space } from '../../../common/components';
import Icon from '../../../common/components/Icon';
import colors from '../../../constants/colors';

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
        <Image source={require('../assets/mleko.png')} style={{ width: 50, height: 50, marginRight: 18 }} />
        <View>
          <Text>Dukat Trajno mlijeko</Text>
          <Space height={3} />
          <Text style={{ color: colors.gray }}>Dodano 2.4.</Text>
        </View>
      </View>
      <View style={{ backgroundColor: colors.textField, borderRadius: 8, padding: 9 }}>
        <Icon icon={DotsHorizontalIcon} width={20} height={20} stroke={colors.darkSouls} />
      </View>
    </View>
  );
};

export default ListItem;
