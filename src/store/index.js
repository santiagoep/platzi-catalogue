import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['config']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = (initialState = {}) => {
  const newStore = createStore(persistedReducer, initialState);
  return newStore;
};

export const makeMockedStore = (initialState = {}) => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  return store;
};

export default createWrapper(makeStore);
