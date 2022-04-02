import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '../../common/components';

import { PlusIcon } from '../../common/assets/icons';
import { GroupCard } from './components';

interface GroupsScreenProps {}

const GroupsScreen: React.FC<GroupsScreenProps> = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 28 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>👪</Text>
        <ActionButton icon={PlusIcon} />
      </View>
      <Text>Grupe</Text>
      <GroupCard />
    </SafeAreaView>
  );
};

export default GroupsScreen;
