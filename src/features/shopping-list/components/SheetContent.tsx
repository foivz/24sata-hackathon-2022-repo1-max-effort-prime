import React from 'react';
import { View, Text } from 'react-native';
import { PlusIcon, SearchIcon } from '../../../common/assets/icons';

import { ActionButton, TextField } from '../../../common/components';
import colors from '../../../constants/colors';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <TextField icon={SearchIcon} value="nekaj" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ActionButton icon={PlusIcon} color={colors.green} iconSize={35} style={{ borderRadius: 30, marginRight: 20 }} />
        <Text style={{ color: colors.gray }}>Kreiraj proizvod "Mlijeko"</Text>
      </View>
    </View>
  );
};

export default SheetContent;
