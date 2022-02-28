import React from 'react';

import { AuthContextProvider } from './AuthContext';
import { UserContextProvider } from './UserContext';

const GlobalContext = ({ children }): JSX.Element => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </AuthContextProvider>
  );
};

export default GlobalContext;
