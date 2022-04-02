import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ActionButton, Avatar, Progress, Space } from '../../common/components';
import ExpenseEntry from './components/ExpenseEntry';

import { PlusIcon, TrashIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from '../dashboard/assets';
import useModal from '../../hooks/useModal';
import screen from '../../navigation/screens';
import { GroupMember } from './components';

interface GroupDetailsScreenProps {}

const GroupDetailsScreen: React.FC<GroupDetailsScreenProps> = () => {
  const { openModal } = useModal();
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.flexRow}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>Obitelj</Text>
        <ActionButton icon={PlusIcon} onPress={() => navigation.navigate(screen.GROUP_DETAILS_SHEET_SELECT_CONTACT)} />
      </View>
      <Space height={30} />

      <GroupMember name="Filip Bel" />

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
