import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

import screen from '../../../navigation/screens';

import GroupDetailsScreen from '../GroupDetailsScreen';
import SelectContactScreen from '../SelectContactScreen';

export type GroupDetailsSheetNavigatorParamList = {
  [screen.GROUP_DETAILS_SHEET_GROUP_DETAILS]: undefined;
  [screen.GROUP_DETAILS_SHEET_SELECT_CONTACT]: undefined;
};

const Stack = createStackNavigator<GroupDetailsSheetNavigatorParamList>();

interface GroupDetailsSheetNavigatorProps {}

const GroupDetailsSheetNavigator: React.FunctionComponent<GroupDetailsSheetNavigatorProps> = () => {
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
        <Stack.Screen name={screen.GROUP_DETAILS_SHEET_GROUP_DETAILS} component={GroupDetailsScreen} />
        <Stack.Screen name={screen.GROUP_DETAILS_SHEET_SELECT_CONTACT} component={SelectContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GroupDetailsSheetNavigator;
