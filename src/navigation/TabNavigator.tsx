import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabOneScreen from '../../screens/TabOneScreen';
import ShoppingListScreen from '../features/shopping-list/ShoppingListScreen';
import { BarsSolidIcon, DollarSignSolidIcon, HouseSolidIcon, ListCheckSolidIcon, UsersSolidIcon } from '../common/assets/icons/navigation';

import colors from '../constants/colors';
import TabBarIcon from '../common/components/TabBarIcon';
import { RootTabParamList } from '../../types';
import ExpensesStack from '../features/expenses/navigation/ExpensesStack';

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
        component={ExpensesStack}
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

export default BottomTabNavigator;
