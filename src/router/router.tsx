import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AboutScreen, HomeScreen, LayoutAnimation } from '_screens/';

const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LayoutAnimation" component={LayoutAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
