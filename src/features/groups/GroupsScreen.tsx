import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '../../common/components';
import { GroupCard } from './components';

import { PlusIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import GroupSheet from './GroupSheet/GroupSheet';

interface GroupsScreenProps {}

const GroupsScreen: React.FC<GroupsScreenProps> = () => {
  const groupSheetRef = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: fontSize.extraLarge }}>👪</Text>
        <ActionButton icon={PlusIcon} onPress={() => groupSheetRef.current?.present()} />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 30 }}>Grupe</Text>
      <GroupCard onPress={() => groupSheetRef.current?.present()} />
      <GroupSheet sheetRef={groupSheetRef} />
    </SafeAreaView>
  );
};

export default GroupsScreen;
