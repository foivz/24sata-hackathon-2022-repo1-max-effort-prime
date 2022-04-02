import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../MenuScreen';

import screen from '../../../navigation/screens';

export type ExpensesStackParamList = {
  [screen.MENU]: undefined;
};

const Stack = createNativeStackNavigator<ExpensesStackParamList>();

const ExpensesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screen.MENU} component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default ExpensesStack;
