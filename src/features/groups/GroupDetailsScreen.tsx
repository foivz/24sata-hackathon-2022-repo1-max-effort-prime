import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ActionButton, Avatar, Progress, Space } from '../../common/components';
import ExpenseEntry from './components/ExpenseEntry';

import { PlusIcon, TrashIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from '../dashboard/assets';
import useModal from '../../hooks/useModal';

interface GroupDetailsScreenProps {}

const GroupDetailsScreen: React.FC<GroupDetailsScreenProps> = () => {
  const { openModal } = useModal();

  return (
    <View>
      <View style={styles.flexRow}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>Obitelj</Text>
        <ActionButton icon={PlusIcon} />
      </View>
      <Space height={30} />

      <View style={styles.flexRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar style={{ marginRight: 20 }} />
          <Text style={styles.title}>Filip Bel</Text>
        </View>
        <ActionButton icon={TrashIcon} color={colors.paradisePink} backgroundColor={colors.sentimentalPink} />
      </View>

      <Space height={50} />

      <Text style={styles.title}>💰 Zajednički troškovi</Text>
      <Space height={25} />
      <ExpenseEntry />
      <Space height={25} />

      <View style={styles.flexRow}>
        <Text style={styles.title}>📈 Mjesečni budžet</Text>
        <ActionButton icon={PencilIcon} onPress={() => openModal('ChangeBudgetModal')} />
      </View>
      <Space height={15} />
      <Text style={{ fontWeight: '500', fontSize: fontSize.medium }}>76 HRK</Text>
      <Text style={{ marginVertical: 10, color: colors.gray }}>Preostalo od mjesečnog budžeta</Text>
      <Progress />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
});

export default GroupDetailsScreen;
