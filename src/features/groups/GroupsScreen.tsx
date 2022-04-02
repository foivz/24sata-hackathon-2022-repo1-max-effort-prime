import React, { useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton, Space } from '../../common/components';
import { GroupCard } from './components';

import { PlusIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import NewGroupSheet from './NewGroupSheet/NewGroupSheet';
import GroupDetailsSheet from './GroupDetailsSheet/GroupDetailsSheet';
import useGroups from './hooks/useGroups';

interface GroupsScreenProps {}

const GroupsScreen: React.FC<GroupsScreenProps> = () => {
  const newGroupSheetRef = useRef<BottomSheetModal>(null);
  const groupDetailsSheetRef = useRef<BottomSheetModal>(null);
  const { data } = useGroups();

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: fontSize.extraLarge }}>👪</Text>
        <ActionButton icon={PlusIcon} onPress={() => newGroupSheetRef.current?.present()} />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 30 }}>Grupe</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <GroupCard group={item} />}
        ItemSeparatorComponent={() => <Space height={20} />}
      />
      <NewGroupSheet sheetRef={newGroupSheetRef} />
      <GroupDetailsSheet sheetRef={groupDetailsSheetRef} />
    </SafeAreaView>
  );
};

export default GroupsScreen;
