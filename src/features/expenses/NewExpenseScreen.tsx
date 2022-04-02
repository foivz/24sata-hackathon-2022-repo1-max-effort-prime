import React, { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { ActionButton, Button, Space } from '../../common/components';
import ListItem from './components/ListItem';

import colors from '../../constants/colors';
import { PlusIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { SplitIcon } from './assets';
import AddProductSheet from '../../common/sheets/AddProductSheet/AddProductSheet';
import SplitExpensesSheet from './SplitExpensesSheet/SplitExpensesSheet';
import ExpenseParticipant from './components/ExpenseParticipant';

interface NewExpenseScreenProps {}

const NewExpenseScreen: React.FC<NewExpenseScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const addProductSheetRef = useRef<BottomSheetModal>(null);
  const splitExpensesSheetRef = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView style={{ paddingHorizontal: 28 }} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 30 }}>
        <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', marginBottom: 30 }}>💰 Novi trošak</Text>

        {/* Total */}

        <View style={{ backgroundColor: colors.white, paddingHorizontal: 20, paddingVertical: 28, borderRadius: 20 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 5 }}>180 HRK</Text>
            <Text style={{ color: colors.gray }}>Ukupan iznos</Text>
          </View>
          <Space height={20} />

          <Button
            title="Podijeli trošak"
            variant="secondary"
            icon={SplitIcon}
            containerStyle={{ alignSelf: 'flex-start', paddingHorizontal: 20 }}
            textStyle={{ fontWeight: '500' }}
            onPress={() => splitExpensesSheetRef.current?.present()}
          />
        </View>
        <Space height={20} />
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.small, marginBottom: 10 }}>Trošak dijele</Text>
        <ExpenseParticipant />
        <ExpenseParticipant />
        <ExpenseParticipant />
        <Space height={20} />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: fontSize.small, marginBottom: 10 }}>Stavke</Text>
          <ActionButton icon={PlusIcon} onPress={() => addProductSheetRef.current?.present()} />
        </View>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
      <Button title="Spremi trošak" variant="primary" containerStyle={{ bottom: insets.bottom + 20, paddingVertical: 15 }} />
      <AddProductSheet sheetRef={addProductSheetRef} />
      <SplitExpensesSheet sheetRef={splitExpensesSheetRef} />
    </SafeAreaView>
  );
};

export default NewExpenseScreen;
