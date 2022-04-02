import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ActionButton, Avatar, Divider, Progress, Space } from '../../common/components';
import ExpenseEntry from './components/ExpenseEntry';

import { PlusIcon, TrashIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from '../dashboard/assets';
import useModal from '../../hooks/useModal';
import screen from '../../navigation/screens';
import { GroupMember } from './components';
import useGroups from './hooks/useGroups';
import { ScrollView } from 'react-native-gesture-handler';

interface GroupDetailsScreenProps {}

const GroupDetailsScreen: React.FC<GroupDetailsScreenProps> = () => {
  const { openModal } = useModal();
  const navigation = useNavigation();
  const { activeGroup } = useGroups();

  return (
    <ScrollView>
      <View style={styles.flexRow}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>{activeGroup.name}</Text>
        <ActionButton icon={PlusIcon} onPress={() => navigation.navigate(screen.GROUP_DETAILS_SHEET_SELECT_CONTACT)} />
      </View>
      <Space height={30} />

      <FlatList
        scrollEnabled={false}
        data={activeGroup.members}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <GroupMember member={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />

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
      <Progress endValue={activeGroup.monthlyBudget} />
    </ScrollView>
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
