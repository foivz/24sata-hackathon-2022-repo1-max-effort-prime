import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';

import { ActionButton, Button, Divider, Space, TextField } from '../../common/components';

import { PlusIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import screen from '../../navigation/screens';
import { GroupMember } from './components';
import { useAppSelector } from '../../common/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createGroup } from './api/groups';
import useUser from '../../common/hooks/useUser';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

interface NewGroupScreenProps {}

const NewGroupScreen: React.FC<NewGroupScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const groupState = useAppSelector((state) => state.groups);
  const navigation = useNavigation();
  const user = useUser();
  const [name, setName] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const queryClient = useQueryClient();
  const createGroupMutation = useMutation(createGroup);
  const { dismiss } = useBottomSheetModal();

  const handleAddGroup = async () => {
    console.log('body', {
      name,
      monthlyBudget: Number(budget),
      members: groupState.addedMembers.map((member) => member._id),
      createdBy: user?._id,
    });
    await createGroupMutation.mutateAsync({
      name,
      monthlyBudget: Number(budget),
      members: [user?._id, ...groupState.addedMembers.map((member) => member._id)],
      createdBy: user?._id,
    });

    queryClient.invalidateQueries('groups');
    dismiss();
  };

  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}>
      <View>
        <Text style={styles.newGroup}>Nova grupa</Text>

        <TextField placeholder="Naziv grupe" value={name} onChangeText={(val) => setName(val)} />
        <Space height={30} />

        <View style={styles.flexRow}>
          <Text style={styles.members}>👪 Članovi</Text>
          <ActionButton icon={PlusIcon} onPress={() => navigation.navigate(screen.NEW_GROUP_SHEET_SELECT_CONTACT)} />
        </View>
        <Space height={30} />

        <FlatList
          data={groupState.addedMembers}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <GroupMember member={item} />}
          ItemSeparatorComponent={() => <Divider />}
        />

        <Space height={40} />

        <Text style={styles.title}>📈 Mjesečni budžet</Text>
        <Space height={15} />
        <View style={styles.textInputContainer}>
          <TextInput placeholder="200" value={budget} onChangeText={(val) => setBudget(val)} placeholderTextColor={colors.darkSouls} />
          <Text style={styles.currency}>HRK</Text>
        </View>
      </View>

      <Button
        variant="primary"
        title="Kreiraj grupu"
        onPress={handleAddGroup}
        loading={createGroupMutation.isLoading}
        containerStyle={[styles.create, { bottom: insets.bottom + 50 }]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newGroup: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
    marginBottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  members: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
  },
  create: {
    marginTop: 40,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteSmoke,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 20,
  },
  currency: {
    position: 'absolute',
    right: 10,
    color: colors.darkSouls,
  },
});

export default NewGroupScreen;
