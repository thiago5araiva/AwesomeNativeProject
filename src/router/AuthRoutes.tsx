import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HeadingHeader } from '_molecules/';
import { SignInScreen, SignUpScreen, StartScreen } from '_screens/';

export type AuthStackParamList = {
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const defaultScreenOptions: object = { headerShown: false };
const startScreenOptions: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
};
const signInScreenOptions: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  headerShown: true,
  header: props => <HeadingHeader {...props} />,
  title: 'Sign In',
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes = (): JSX.Element => {
  return (
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
          options={{
            ...signInScreenOptions,
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthRoutes;
