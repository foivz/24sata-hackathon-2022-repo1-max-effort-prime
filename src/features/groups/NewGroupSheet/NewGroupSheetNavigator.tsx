import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

import screen from '../../../navigation/screens';

import NewGroupScreen from '../NewGroupScreen';
import SelectContactScreen from '../SelectContactScreen';

export type NewGroupSheetNavigatorParamList = {
  [screen.NEW_GROUP_SHEET_NEW_GROUP]: undefined;
  [screen.NEW_GROUP_SHEET_SELECT_CONTACT]: undefined;
};

const Stack = createStackNavigator<NewGroupSheetNavigatorParamList>();

interface NewGroupSheetNavigatorProps {}

const NewGroupSheetNavigator: React.FunctionComponent<NewGroupSheetNavigatorProps> = () => {
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
        <Stack.Screen name={screen.NEW_GROUP_SHEET_NEW_GROUP} component={NewGroupScreen} />
        <Stack.Screen name={screen.NEW_GROUP_SHEET_SELECT_CONTACT} component={SelectContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewGroupSheetNavigator;
