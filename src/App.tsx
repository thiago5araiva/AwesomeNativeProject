// TODO: Create a error handler

import React from 'react';
import { BackHandler } from 'react-native';
import JailMonkey from 'jail-monkey';
import Routes from './router/router';
import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: 'https://1e8c2efc8e05432992e60402fa209b20@o1133918.ingest.sentry.io/6180827',

  tracesSampleRate: 1.0,
});
import { GlobalContext } from '_contexts/';

const App = () => {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
};

export default Sentry.wrap(App);
