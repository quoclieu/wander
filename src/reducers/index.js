import { combineReducers } from 'redux';

import tripDetailsReducer from './tripDetailsReducer';

export default combineReducers({
  dates: tripDetailsReducer,
});
