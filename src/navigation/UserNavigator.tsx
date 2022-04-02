import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './TabNavigator';
import ChatScreen from '../features/chatbot/ChatScreen';

import screen from './screens';
import colors from '../constants/colors';

export type UserNavigatorParamList = {
  [screen.TAB_NAVIGATOR]: undefined;
  [screen.CHAT]: undefined;
};

const Stack = createNativeStackNavigator<UserNavigatorParamList>();

const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screen.TAB_NAVIGATOR} component={BottomTabNavigator} />
      <Stack.Screen name={screen.CHAT} component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
