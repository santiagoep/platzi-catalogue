/* istanbul ignore file */
/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { makeMockedStore } from '@store/index';
import mockedStore from '@__mocks__/store/index';
import lightTheme from '@assets/styles/themes/light';

const WrapperComponent = ({ children, config, initialState }) => {
  if (config && config.theme && config.redux) {
    const store = makeMockedStore(initialState || mockedStore);
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  if (config && config.redux) {
    const store = makeMockedStore(initialState || mockedStore);
    return <Provider store={store}>{children}</Provider>;
  }
  if (config && config.theme) {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
  }
  return children;
};

const renderWithProviders = (
  { redux, theme } = {},
  initialState,
  getMockedStore
) => {
  const renderProviders = (Component) => (
    <WrapperComponent
      config={{ redux, theme }}
      initialState={initialState}
      getMockedStore={getMockedStore}
    >
      {Component}
    </WrapperComponent>
  );

  return {
    mount: (Component) => mount(renderProviders(Component)),
    render: (Component) => render(renderProviders(Component)),
    shallow: (Component) => shallow(renderProviders(Component)),
    renderer: (Component) => Renderer.create(renderProviders(Component))
  };
};

export default renderWithProviders;
