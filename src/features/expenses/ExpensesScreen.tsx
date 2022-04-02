import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import ActionButton from '../../common/components/ActionButton';
import { ExpenseEntry } from './components';
import ExpenseDetailsSheet from './components/ExpenseDetailsSheet';

import { PlusIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import screen from '../../navigation/screens';

const ExpensesScreen = () => {
  const [active, setActive] = useState<'redovna' | 'ponavljajuća'>('redovna');
  const expensesSheet = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <Text style={{ fontSize: fontSize.extraLarge, fontWeight: 'bold' }}>💰 Troškovi</Text>
        <ActionButton icon={PlusIcon} color={colors.green} onPress={() => navigation.navigate(screen.NEW_EXPENSE)} />
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
