import React from 'react';

import { UserContextProvider } from './UserContext';

const GlobalContext = ({ children }): JSX.Element => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default GlobalContext;
