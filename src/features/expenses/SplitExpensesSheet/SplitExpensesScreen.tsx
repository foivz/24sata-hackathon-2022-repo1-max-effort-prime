import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ChevronRightIcon } from '../../../common/assets/icons';

import { Avatar, Divider } from '../../../common/components';
import Icon from '../../../common/components/Icon';
import colors from '../../../constants/colors';

import { fontSize } from '../../../constants/typography';
import Group from '../components/Group';

interface SplitExpensesScreenProps {}

const SplitExpensesScreen: React.FunctionComponent<SplitExpensesScreenProps> = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 30 }}>Podijeli trošak</Text>

      <FlatList
        data={[
          {
            id: '1',
            name: 'Obitelj',
          },
          {
            id: '2',
            name: 'Frendovi',
          },
          {
            id: '3',
            name: 'Cimeri',
          },
        ]}
        renderItem={({ item }) => <Group name={item.name} />}
        ItemSeparatorComponent={() => <Divider />}
      />

      {/* <Group name="Obitelj" />
      <Group name="Frendovi" />
      <Group name="Bossevi" />
      <Group name="Bossioničari" /> */}
    </View>
  );
};

export default SplitExpensesScreen;
