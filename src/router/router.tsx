//TODO: Ajustar o path da pasta themes
import React, { useState } from 'react';
import { useColorScheme, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { DarkTheme, LightTheme } from '../theme';
import {
  StartScreen,
  SignInScreen,
  SignUpScreen,
  AboutScreen,
  HomeScreen,
} from '_screens/';
import CustomHeader from '_molecules/CustomHeader';

const Stack = createNativeStackNavigator();

const router = () => {
  const scheme = useColorScheme();
  console.log(scheme);
  const signOptions: NativeStackNavigationOptions = {
    header: props => <CustomHeader {...props} />,
  };
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        <Stack.Group screenOptions={signOptions}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignOut" component={SignUpScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
