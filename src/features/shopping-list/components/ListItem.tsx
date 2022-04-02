import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DotsHorizontalIcon, PlusIcon } from '../../../common/assets/icons';
import { Space } from '../../../common/components';
import Icon from '../../../common/components/Icon';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

import useActionSheet from '../../../hooks/useActionSheet';
import { CheckIcon } from '../assets';

interface ListItemProps {
  bought?: boolean;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ bought }) => {
  const openActionSheet = useActionSheet(
    ['Obriši'],
    (index) => {
      console.log('index', index);
    },
    { destructiveButtonIndex: 1 },
  );

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
        marginBottom: 14,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/mleko.png')} style={{ width: 50, height: 50, marginRight: 18 }} />
        <View>
          <Text
            style={{
              fontSize: fontSize.smallToNormal,
              marginBottom: 2,
            }}>
            Dukat Trajno mlijeko
          </Text>
          <Space height={3} />
          {bought ? (
            <View style={{ flexDirection: 'row' }}>
              <Icon icon={CheckIcon} width={16} height={16} style={{ marginRight: 6 }} color={colors.green} />
              <Text style={{ color: colors.green, fontSize: fontSize.extraSmall }}>3 komada (kupljeno)</Text>
            </View>
          ) : (
            <Text style={{ color: colors.gray, fontSize: fontSize.extraSmall }}>3 komada</Text>
          )}
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: colors.whiteSmoke, borderRadius: 8, padding: 9 }} onPress={openActionSheet}>
        <Icon icon={DotsHorizontalIcon} width={20} height={20} stroke={colors.darkSouls} />
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
