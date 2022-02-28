import React, { createContext, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';
import UserContext from './UserContext';

type SignInProps = {
  email: string;
  password: string;
};

type PropsAuthContext = {
  signIn: ({ email, password }: SignInProps) => void;
  signOut: React.DispatchWithoutAction;
};

const DEFAULT_VALUE = {
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE);
const AuthContextProvider = ({ children }): JSX.Element => {
  const { setUser } = useContext(UserContext);
  const navigation = React.useContext(NavigationContext);

  async function signIn({ email, password }: SignInProps) {
    try {
      const state = await auth().signInWithEmailAndPassword(email, password);
      const data = state.user;
      setUser((state: React.ComponentState) => ({
        ...state,
        displayName: data.displayName,
        email: data.email,
        emailVerified: data.emailVerified,
        isAnonymous: data.isAnonymous,
        metadata: {
          creationTime: data.metadata.creationTime,
          lastSignInTime: data.metadata.lastSignInTime,
        },
        phoneNumber: data.phoneNumber,
        photoURL: data.photoURL,
        uid: data.uid,
      }));
      await AsyncStorage.setItem('@uid', data.uid);
    } catch (error) {
      console.log(error);
    }
  }
  async function signOut() {
    try {
      const key = await AsyncStorage.getItem('@uid');
      typeof key !== null && (await AsyncStorage.removeItem('@uid'));
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
