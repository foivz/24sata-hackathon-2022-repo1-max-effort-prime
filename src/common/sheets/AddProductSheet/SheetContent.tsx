import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { PlusIcon, SearchIcon } from '../../assets/icons';

import { ActionButton, TextField } from '../../components';
import colors from '../../../constants/colors';
import useModal from '../../../hooks/useModal';
import { fontSize } from '../../../constants/typography';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  const { openModal } = useModal();

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}>
      <TextField icon={SearchIcon} value="nekaj" />

      <FlatList
        data={[
          { id: '1', title: 'Dukat trajno mlijeko' },
          {
            id: '2',
            title: 'Dukat trajno mlijeko',
          },
        ]}
        ListHeaderComponent={() => (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <ActionButton
                icon={PlusIcon}
                color={colors.green}
                iconSize={35}
                style={{ borderRadius: 30, marginRight: 20, width: 48, height: 48 }}
              />
              <Text style={{ color: colors.gray, fontSize: fontSize.smallToNormal }}>Kreiraj proizvod "Mlijeko"</Text>
            </View>
            <View style={{ height: 1, backgroundColor: colors.tabBarBackground, marginVertical: 16 }} />
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => openModal('ChangeQuantityModal')}>
            <Image
              source={require('../../../features/shopping-list/assets/mleko.png')}
              style={{ width: 50, height: 50, marginRight: 18 }}
            />
            <Text style={{ fontSize: fontSize.smallToNormal }}>Dukat Trajno mlijeko</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: colors.tabBarBackground, marginVertical: 16 }} />}
      />
    </View>
  );
};

export default SheetContent;
