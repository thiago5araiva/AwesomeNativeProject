/**
 * CUSTOM HEADER EXAMPLE
 * const signInOptions: NativeStackNavigationOptions = {
 * header: props => <CustomHeader {...props} />,
 * };
 **/

import React, { useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, LightTheme } from '_themes/';

import { AuthContext } from '_contexts/';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const router = (): JSX.Element => {
  const scheme = useColorScheme();
  const { isSignedIn, setSignedIn } = useContext(AuthContext);

  async function AlreadyLogin() {
    let key = await AsyncStorage.getItem('@isSignedIn');
    key === null ? setSignedIn(false) : setSignedIn(true);
    console.log('🚀 ~ line 25 ~ AlreadyLogin ~ key', key);
  }

  useEffect(() => {
    AlreadyLogin();
  }, []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      {isSignedIn ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default router;
