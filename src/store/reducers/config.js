import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setConfig: ['config']
});

export default Creators;

export const INITIAL_STATE = {
  data: {}
};

export const setConfig = (state, { config }) => ({
  ...state,
  data: config
});

export const HANDLERS = {
  [Types.SET_CONFIG]: setConfig
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
