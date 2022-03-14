import React, { createContext, useContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './UserContext';

type PropsAuthContext = {
  isSignedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (email: string, password: string) => void;
  signOut: React.DispatchWithoutAction;
};

const DEFAULT_VALUE = {
  isSignedIn: null,
  setSignedIn: () => {},
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE);
const AuthContextProvider = ({ children }): JSX.Element => {
  const { setUser } = useContext(UserContext);
  const [isSignedIn, setSignedIn] = useState(DEFAULT_VALUE.isSignedIn);

  async function signIn(email, password) {
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
      setSignedIn(true);
      await AsyncStorage.setItem('@isSignedIn', JSON.stringify(isSignedIn));
      console.info(`User ${data.uid} has been signed`);
    } catch (error) {
      setSignedIn(false);
      console.error(error);
    }
  }
  async function signOut() {
    try {
      const key = await AsyncStorage.getItem('@uid');
      typeof key !== null && (await AsyncStorage.removeItem('@uid'));
      await auth().signOut();
      setSignedIn(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, setSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
