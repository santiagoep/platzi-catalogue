import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import wrapper from '@store/index';
import theme from '@assets/styles/themes/light';
import BaseStyles from '@components/BaseStyles/BaseStyles';

const RootComponent = ({ Component, pageProps }) => {
  const store = useStore();
  const persistor = persistStore(store);

  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <PersistGate persistor={persistor} loading={null}>
      {() => (
        <ThemeProvider theme={theme}>
          <BaseStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </PersistGate>
  );
};

RootComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default wrapper.withRedux(RootComponent);
