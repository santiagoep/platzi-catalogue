import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['thumbs']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = (initialState = {}) => {
  const newStore = createStore(persistedReducer, initialState);
  return newStore;
};

export default createWrapper(makeStore);
