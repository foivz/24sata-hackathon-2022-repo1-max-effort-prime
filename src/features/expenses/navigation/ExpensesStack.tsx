import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExpensesScreen from '../ExpensesScreen';
import NewExpenseScreen from '../NewExpenseScreen';

import screen from '../../../navigation/screens';

export type ExpensesStackParamList = {
  [screen.EXPENSES]: undefined;
  [screen.NEW_EXPENSE]: undefined;
};

const Stack = createNativeStackNavigator<ExpensesStackParamList>();

const ExpensesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screen.EXPENSES} component={ExpensesScreen} />
      <Stack.Screen name={screen.NEW_EXPENSE} component={NewExpenseScreen} />
    </Stack.Navigator>
  );
};

export default ExpensesStack;
