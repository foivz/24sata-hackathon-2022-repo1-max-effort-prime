import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { PlusIcon } from '../../common/assets/icons';
import ActionButton from '../../common/components/ActionButton';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { ListItem } from './components';
import AddProductSheet from '../../common/sheets/AddProductSheet/AddProductSheet';
import ToggleButton from './components/ToggleButton';
import { fetchShoppingList } from './api/shopping-list';
import { useQuery } from 'react-query';
import useUser from '../../common/hooks/useUser';
import { Space } from '../../common/components';
import useModal from '../../hooks/useModal';

const ShoppingListScreen = () => {
  const [active, setActive] = useState<'redovna' | 'tjedna'>('redovna');
  const addProductSheetRef = useRef<BottomSheetModal>(null);
  const { openModal } = useModal();
  const user = useUser();
  const { data } = useQuery(['shoppingList', 'regular'], () => fetchShoppingList(user?._id), { enabled: !!user });

  if (!data) return null;

  const added = data.items;
  const bought = data.items.filter((item: any) => item.buyedQuantity > 0);

  const onProductSelected = (product: any) => {
    console.log('product', product);
    openModal('ChangeQuantityModal', { item: product._id, sheetRef: addProductSheetRef });
  };

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

        {active === 'redovna' ? (
          <FlatList
            data={added}
            keyExtractor={(added) => added._id}
            renderItem={({ item }) => <ListItem item={item} />}
            ListEmptyComponent={() => <Text>Bez stavki</Text>}
          />
        ) : (
          <FlatList
            data={[
              {
                _id: '123',
                name: 'Maslac',
                imageUrl:
                  'https://d17zv3ray5yxvp.cloudfront.net/variants/aXbbmFJ4uDuK8GNReyxemUx2/57ed05bea98bceae5f0eaada26b69cee6c61471d3030f7123d212844a35eba04',
                addedQuantity: 2,
              },
            ]}
            keyExtractor={(added) => added._id}
            renderItem={({ item }) => <ListItem item={item} />}
            ListEmptyComponent={() => <Text>Bez stavki</Text>}
          />
        )}

        <Space height={10} />
        {bought.length > 0 && (
          <FlatList
            data={bought}
            ListHeaderComponent={() => <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', marginBottom: 20 }}>Kupljeno</Text>}
            keyExtractor={(bought) => bought._id}
            renderItem={({ item }) => <ListItem item={item} bought />}
          />
        )}
      </ScrollView>
      <AddProductSheet sheetRef={addProductSheetRef} onSelected={onProductSelected} />
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
