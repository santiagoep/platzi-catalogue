import { combineReducers } from 'redux';

import { reducer as thumbsReducer } from './thumbs';

const rootReducer = combineReducers({
  thumbs: thumbsReducer
});

export default rootReducer;
