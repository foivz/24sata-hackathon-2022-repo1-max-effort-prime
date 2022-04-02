import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

import screen from '../../../navigation/screens';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SplitExpensesScreen from './SplitExpensesScreen';
import SplitExpensesPricesScreen from './SplitExpensesPricesScreen';

export type SplitExpensesNavigatorParamList = {
  [screen.SPLIT_EXPENSES_SHEET_SPLIT]: undefined;
  [screen.SPLIT_EXPENSES_SHEET_PRICES]: undefined;
};

const Stack = createStackNavigator<SplitExpensesNavigatorParamList>();

interface SplitExpensesNavigatorProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
}

const SplitExpensesNavigator: React.FunctionComponent<SplitExpensesNavigatorProps> = ({ sheetRef }) => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={screen.SPLIT_EXPENSES_SHEET_SPLIT} component={SplitExpensesScreen} />
        <Stack.Screen name={screen.SPLIT_EXPENSES_SHEET_PRICES} component={SplitExpensesPricesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default SplitExpensesNavigator;
