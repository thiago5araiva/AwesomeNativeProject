import React, { createContext, useState } from 'react';

type UserType = {
  displayName: null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  phoneNumber: null;
  photoURL: null;
  uid: string;
};

type PropsUserContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  user: {
    displayName: null,
    email: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: { creationTime: 0, lastSignInTime: 0 },
    phoneNumber: null,
    photoURL: null,
    uid: 'string',
  },
  setUser: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider = ({ children }): JSX.Element => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
