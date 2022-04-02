import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabOneScreen from "../../screens/TabOneScreen";
import TabTwoScreen from "../../screens/TabTwoScreen";
import { RootStackParamList, RootTabParamList } from "../../types";
import { BarsSolidIcon, DollarSignSolidIcon, HouseSolidIcon, ListCheckSolidIcon, UsersSolidIcon } from "../assets/icons/navigation";

import colors from "../constants/colors";
import TabBarIcon from "../common/components/TabBarIcon";

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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{ backgroundColor: colors.tabBarBackground }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={() => ({
          title: "Tab One",
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={HouseSolidIcon} color={color} size={size} focused={focused} />;
          },
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={ListCheckSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={DollarSignSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabTwoScreen}
        options={{
          title: "Tab Four",
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={UsersSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={TabTwoScreen}
        options={{
          title: "Tab Five",
          tabBarIcon: ({ color, size, focused }) => {
            return <TabBarIcon icon={BarsSolidIcon} color={color} size={size} focused={focused} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
