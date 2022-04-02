import React, { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
import { useModal } from 'react-native-modalfy';
import { useAppSelector } from '../../common/store';
import { totalPriceSelector } from './store';
import { useMutation, useQueryClient } from 'react-query';
import { createProduct } from '../../common/api';
import { useNavigation } from '@react-navigation/native';
import { createExpense } from './api';
import useUser from '../../common/hooks/useUser';

interface NewExpenseScreenProps {}

const NewExpenseScreen: React.FC<NewExpenseScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const addProductSheetRef = useRef<BottomSheetModal>(null);
  const splitExpensesSheetRef = useRef<BottomSheetModal>(null);
  const { openModal } = useModal();
  const { items } = useAppSelector((state) => state.expenses);
  const queryClient = useQueryClient();
  const user = useUser();

  const totalAmount = useAppSelector((state) => totalPriceSelector(state.expenses));
  const mutation = useMutation(createExpense);
  const navigation = useNavigation();

  const onProductSelected = (product: any) => {
    openModal('ChangeQuantityPriceModal', {
      _id: product._id,
      price: product.price,
      quantity: product.quantity,
      name: product.name,
      imageUrl: product.imageUrl,
    });
  };

  const handleCreateNewExpense = async () => {
    const data = items.map((item) => ({
      item: item._id,
      price: item.price,
      quantity: item.quantity,
    }));

    console.log(data);

    await mutation.mutateAsync({
      items: data,
      userId: user?._id,
    });
    await queryClient.invalidateQueries('expenses');
    navigation.goBack();
  };

  return (
    <View style={{ paddingHorizontal: 28, marginTop: 50, flex: 1 }} edges={['top', 'left', 'right']}>
      <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', marginBottom: 30 }}>💰 Novi trošak</Text>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 30 }}>
        {/* Total */}

        <View style={{ backgroundColor: colors.white, paddingHorizontal: 20, paddingVertical: 22, borderRadius: 20 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 5 }}>{totalAmount} HRK</Text>
            <Text style={{ color: colors.gray, fontSize: fontSize.small }}>Ukupan iznos</Text>
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
        <Space height={30} />
        {/* <Text style={styles.subtitle}>Trošak dijele</Text>
        <Space height={16} />
        <ExpenseParticipant />
        <ExpenseParticipant />
        <ExpenseParticipant />
        <Space height={20} /> */}

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={styles.subtitle}>Stavke</Text>
          <ActionButton icon={PlusIcon} onPress={() => addProductSheetRef.current?.present()} />
        </View>
        {items.map((item) => (
          <ListItem key={item._id} item={item} />
        ))}
        {/* <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem /> */}
      </ScrollView>
      <Button title="Spremi trošak" variant="primary" containerStyle={{ marginBottom: 20 }} onPress={handleCreateNewExpense} />
      <AddProductSheet sheetRef={addProductSheetRef} onSelected={onProductSelected} />
      <SplitExpensesSheet sheetRef={splitExpensesSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 'bold',
    fontSize: fontSize.normal,
  },
});

export default NewExpenseScreen;
