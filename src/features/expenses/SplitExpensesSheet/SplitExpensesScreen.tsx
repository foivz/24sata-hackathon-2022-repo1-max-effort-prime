import React from 'react';
import { View, Text } from 'react-native';
import { ChevronRightIcon } from '../../../common/assets/icons';

import { Avatar } from '../../../common/components';
import Icon from '../../../common/components/Icon';
import colors from '../../../constants/colors';

import { fontSize } from '../../../constants/typography';
import Group from '../components/Group';

interface SplitExpensesScreenProps {}

const SplitExpensesScreen: React.FunctionComponent<SplitExpensesScreenProps> = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>Podijeli trošak</Text>
      <Group name="Obitelj" />
      <Group name="Frendovi" />
      <Group name="Bossevi" />
      <Group name="Bossioničari" />
    </View>
  );
};

export default SplitExpensesScreen;
