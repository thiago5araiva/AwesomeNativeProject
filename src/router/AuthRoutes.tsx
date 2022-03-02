import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  GoBackHeader,
  HeadingHeader,
  HeadlineHeader,
} from '_molecules/CustomHeader/';
import { StartScreen, SignInScreen, SignUpScreen } from '_screens/';

const AuthRoutes = [
  {
    name: 'Start',
    component: () => <StartScreen />,
    options: {
      headerShown: false,
    },
  },
];

export default AuthRoutes;
