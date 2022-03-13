/**
 * CUSTOM HEADER EXAMPLE
 * const signInOptions: NativeStackNavigationOptions = {
 * header: props => <CustomHeader {...props} />,
 * };
 **/

import React, { useState } from 'react';
import { useColorScheme, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { DarkTheme, LightTheme } from '_themes/';
import {
  StartScreen,
  SignInScreen,
  SignUpScreen,
  AboutScreen,
  NotTrustUser,
} from '_screens/';
import { HeadingHeader, HeadlineHeader } from '_molecules/';

export type RootStackParamList = {
  Start: undefined;
  SignIn: undefined;
  SignOut: undefined;
  NotTrustUser: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions: object = { headerShown: false };
const signInScreenOptions: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  headerShown: true,
  header: props => <HeadingHeader {...props} />,
  title: 'Sign In',
};

const startScreenOptions: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
};

console.log(startScreenOptions);

const router = () => {
  const scheme = useColorScheme();
  const [isAuthoride, setAuthorized] = useState<boolean>(false);
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={startScreenOptions}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={signInScreenOptions}
          />
          <Stack.Screen name="SignOut" component={SignUpScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;