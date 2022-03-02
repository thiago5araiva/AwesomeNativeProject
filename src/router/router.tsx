/** 
 * CUSTOM HEADER EXAMPLE
   * const signOptions: NativeStackNavigationOptions = {
   * header: props => <CustomHeader {...props} />,
   * }; 
   
**/

import React, { useState } from 'react';
import { useColorScheme, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, LightTheme } from '_themes/';
import {
  StartScreen,
  SignInScreen,
  SignUpScreen,
  AboutScreen,
} from '_screens/';

const Stack = createNativeStackNavigator();

const router = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignOut" component={SignUpScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
