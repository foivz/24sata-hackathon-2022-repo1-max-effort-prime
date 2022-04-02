import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Space } from '../../common/components';
import MenuItem from './components/MenuItem';

import { useAppDispatch } from '../../common/store';
import { fontSize } from '../../constants/typography';
import { signOut } from '../login/store/user';

interface MenuScreenProps {}

const MenuScreen: React.FC<MenuScreenProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', marginBottom: 30 }}>Menu</Text>
      <MenuItem title="⚙ Postavke" disabled />
      <Space height={15} />
      <MenuItem title="💬 Chatbot" />
      <Space height={15} />
      <MenuItem title="🔑 Odjava" onPress={() => dispatch(signOut())} />
    </SafeAreaView>
  );
};

export default MenuScreen;
