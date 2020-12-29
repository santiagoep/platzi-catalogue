import { createReducer, createActions } from 'reduxsauce';

import thumbsMock from '@__mocks__/thumbs';

const { Types, Creators } = createActions({
  setThumbs: ['thumbs']
});

export default Creators;

export const INITIAL_STATE = {
  data: thumbsMock
};

export const setThumbs = (state, { thumbs }) => ({
  ...state,
  data: thumbs
});

export const HANDLERS = {
  [Types.SET_THUMBS]: setThumbs
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
