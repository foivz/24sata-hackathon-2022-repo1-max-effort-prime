import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '../../common/components';
import { GroupCard } from './components';

import { PlusIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import GroupSheet from './NewGroupSheet/NewGroupSheet';
import NewGroupSheet from './NewGroupSheet/NewGroupSheet';
import GroupDetailsSheet from './GroupDetailsSheet/GroupDetailsSheet';

interface GroupsScreenProps {}

const GroupsScreen: React.FC<GroupsScreenProps> = () => {
  const newGroupSheetRef = useRef<BottomSheetModal>(null);
  const groupDetailsSheetRef = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: fontSize.extraLarge }}>👪</Text>
        <ActionButton icon={PlusIcon} onPress={() => newGroupSheetRef.current?.present()} />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 30 }}>Grupe</Text>
      <GroupCard onPress={() => groupDetailsSheetRef.current?.present()} />
      <NewGroupSheet sheetRef={newGroupSheetRef} />
      <GroupDetailsSheet sheetRef={groupDetailsSheetRef} />
    </SafeAreaView>
  );
};

export default GroupsScreen;
