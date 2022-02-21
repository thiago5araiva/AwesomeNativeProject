import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { StackNavigationOptions } from '@react-navigation/stack';
import { DarkTheme, LightTheme } from '../theme';
import { AboutScreen, HomeScreen, LayoutAnimation } from '_screens/';

const Stack = createNativeStackNavigator();
const options: NativeStackNavigationOptions = {
  headerShown: false,
};
const router = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LayoutAnimation" component={LayoutAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
