import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';

import { restoreAuth } from '../features/login/store/user';
import { useAppDispatch, useAppSelector } from '../common/store';

export const Navigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  const { signedIn, isRestoring } = useAppSelector((state) => state.user);

  if (isRestoring) return null;

  return <NavigationContainer>{signedIn ? <UserNavigator /> : <GuestNavigator />}</NavigationContainer>;
};

export default Navigation;
