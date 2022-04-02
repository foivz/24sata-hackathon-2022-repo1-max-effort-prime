import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PlusIcon, SearchIcon } from '../../../common/assets/icons';

import { ActionButton, TextField } from '../../../common/components';
import colors from '../../../constants/colors';
import useModal from '../../../hooks/useModal';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  const { openModal } = useModal();

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <TextField icon={SearchIcon} value="nekaj" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ActionButton icon={PlusIcon} color={colors.green} iconSize={35} style={{ borderRadius: 30, marginRight: 20 }} />
        <Text style={{ color: colors.gray }}>Kreiraj proizvod "Mlijeko"</Text>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => openModal('ChangeQuantityModal')}>
        <Image source={require('../assets/mleko.png')} style={{ width: 50, height: 50, marginRight: 18 }} />
        <Text>Dukat Trajno mlijeko</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SheetContent;
