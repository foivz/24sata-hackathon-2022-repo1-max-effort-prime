import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabOneScreen from '../../screens/TabOneScreen';
import ShoppingListScreen from '../features/shopping-list/ShoppingListScreen';
import { BarsSolidIcon, DollarSignSolidIcon, HouseSolidIcon, ListCheckSolidIcon, UsersSolidIcon } from '../common/assets/icons/navigation';

import colors from '../constants/colors';
import TabBarIcon from '../common/components/TabBarIcon';
import { RootStackParamList, RootTabParamList } from '../../types';
import ExpensesScreen from '../features/expenses/ExpensesScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.green, tabBarShowLabel: false }}
      sceneContainerStyle={{ backgroundColor: colors.tabBarBackground }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={() => ({
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={HouseSolidIcon} color={color} size={size} focused={focused} />;
          },
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={ShoppingListScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={ListCheckSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={DollarSignSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={ShoppingListScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={UsersSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ShoppingListScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={BarsSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
