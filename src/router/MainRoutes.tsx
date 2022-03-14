import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen } from '_screens/';

export type AuthStackParamList = {
  Home: undefined;
};

const homeScreenOptions: NativeStackNavigationOptions = {};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const MainRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeScreenOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainRoutes;
