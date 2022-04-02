import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { ActionButton, Button, Space } from '../../../common/components';
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
    <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: insets.bottom + 35, justifyContent: 'space-between', flex: 1 }}>
      <View>
        <ActionButton
          icon={ArrowLeftIcon}
          backgroundColor={colors.whiteSmoke}
          color={colors.darkSouls}
          onPress={() => navigation.goBack()}
        />
        <Space height={10} />
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.mediumLarge, marginBottom: 10 }}>180 HRK</Text>
        <Text style={{ color: colors.gray, marginBottom: 15 }}>Ukupni trošak</Text>
        <Button
          title="Ravnomjerno podijeli"
          variant="secondary"
          icon={SplitIcon}
          containerStyle={{ alignSelf: 'flex-start', paddingHorizontal: 20, marginBottom: 25 }}
          textStyle={{ fontWeight: '500' }}
          onPress={() => {}}
        />
        <Payer />
        <Payer />
        <Payer />
      </View>
      <Button variant="primary" title="Podijeli trošak" containerStyle={{ paddingVertical: 13 }} onPress={() => dismiss()} />
    </View>
  );
};

export default SplitExpensesPricesScreen;
