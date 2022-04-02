import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { ActionButton, Button, Divider, Space } from '../../../common/components';
import Payer from '../components/Payer';

import { ArrowLeftIcon } from '../../../common/assets/icons';
import colors from '../../../constants/colors';
import { SplitIcon } from '../assets';
import { fontSize } from '../../../constants/typography';

interface SplitExpensesPricesScreenProps {}

const SplitExpensesPricesScreen: React.FunctionComponent<SplitExpensesPricesScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { dismiss } = useBottomSheetModal();

  return (
    <View style={{ paddingBottom: insets.bottom + 35, justifyContent: 'space-between', flex: 1 }}>
      <View>
        <ActionButton
          icon={ArrowLeftIcon}
          backgroundColor={colors.whiteSmoke}
          color={colors.darkSouls}
          onPress={() => navigation.goBack()}
        />
        <Space height={10} />
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 10 }}>180 HRK</Text>
        <Text style={{ color: colors.gray, marginBottom: 15, fontSize: fontSize.small }}>Ukupni trošak</Text>
        <Button
          title="Ravnomjerno podijeli"
          variant="secondary"
          icon={SplitIcon}
          containerStyle={{ alignSelf: 'flex-start', paddingHorizontal: 20, marginBottom: 25 }}
          textStyle={{ fontWeight: '500' }}
          onPress={() => {}}
        />

        <FlatList
          data={[
            {
              id: '1',
              name: 'Filip Bel',
            },
            {
              id: '2',
              name: 'Patik Galina',
            },
            {
              id: '3',
              name: 'Jakov Glavina',
            },
          ]}
          renderItem={({ item }) => <Payer />}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
      <Button variant="primary" title="Podijeli trošak" containerStyle={{ paddingVertical: 13 }} onPress={() => dismiss()} />
    </View>
  );
};

export default SplitExpensesPricesScreen;
