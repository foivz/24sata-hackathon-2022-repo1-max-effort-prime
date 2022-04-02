import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screen from './screens';
import LoginScreen from '../features/auth/LoginScreen';
import RegisterScreen from '../features/auth/RegisterScreen';
import colors from '../constants/colors';

export type GuestNavigatorParamList = {
  [screen.LOGIN]: undefined;
  [screen.REGISTER]: undefined;
};

const Stack = createNativeStackNavigator<GuestNavigatorParamList>();

const GuestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen name={screen.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screen.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default GuestStack;
