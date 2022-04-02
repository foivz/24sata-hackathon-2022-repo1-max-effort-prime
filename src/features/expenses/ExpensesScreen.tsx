import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { PlusIcon } from '../../common/assets/icons';
import ActionButton from '../../common/components/ActionButton';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { ExpenseEntry } from './components';
import ExpenseDetailsSheet from './components/ExpenseDetailsSheet';

const ExpensesScreen = () => {
  const [active, setActive] = useState<'redovna' | 'ponavljajuća'>('redovna');
  const expensesSheet = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: fontSize.large, fontWeight: 'bold' }}>💰Troškovi</Text>
        <ActionButton icon={PlusIcon} color={colors.green} />
      </View>

      <ExpenseEntry onPress={() => expensesSheet.current?.present()} />
      <ExpenseEntry onPress={() => expensesSheet.current?.present()} />
      <ExpenseEntry onPress={() => expensesSheet.current?.present()} />

      <ExpenseDetailsSheet sheetRef={expensesSheet} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
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

export default ExpensesScreen;
