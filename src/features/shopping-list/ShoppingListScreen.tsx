import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { PlusIcon } from '../../common/assets/icons';
import ActionButton from '../../common/components/ActionButton';
import { useAppDispatch } from '../../common/store';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { signOut } from '../login/store/user';
import { ListItem } from './components';
import AddProductSheet from '../../common/sheets/AddProductSheet/AddProductSheet';
import ToggleButton from './components/ToggleButton';

const ShoppingListScreen = () => {
  const [active, setActive] = useState<'redovna' | 'tjedna'>('redovna');
  const dispatch = useAppDispatch();
  const addProductSheetRef = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <View style={{ paddingHorizontal: 28 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: fontSize.extraLarge }}>🛒 </Text>
          <ActionButton icon={PlusIcon} color={colors.green} onPress={() => addProductSheetRef.current?.present()} />
        </View>
        <Text style={{ fontSize: fontSize.extraLarge, fontWeight: 'bold' }}>Lista za kupnju</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 28 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
          <ToggleButton text="Redovna" onPress={() => setActive('redovna')} active={active === 'redovna'} />
          <ToggleButton text="Tjedna" onPress={() => setActive('tjedna')} active={active === 'tjedna'} />
        </View>
        <ListItem />
        <ListItem />
        <ListItem />
        <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', marginVertical: 20 }}>Kupljeno</Text>
        <ListItem bought />
        <ListItem bought />
      </ScrollView>
      <AddProductSheet sheetRef={addProductSheetRef} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default ShoppingListScreen;
