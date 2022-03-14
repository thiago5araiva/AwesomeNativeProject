/**
 * CUSTOM HEADER EXAMPLE
 * const signInOptions: NativeStackNavigationOptions = {
 * header: props => <CustomHeader {...props} />,
 * };
 **/

import React, { useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DarkTheme, LightTheme } from '_themes/';

import { AuthContext } from '_contexts/';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const router = (): JSX.Element => {
  const scheme = useColorScheme();
  const { isSignedIn } = useContext(AuthContext);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      {isSignedIn ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default router;
