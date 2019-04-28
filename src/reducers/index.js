import { combineReducers } from 'redux';

import tripReducer from './tripReducer';
import utilityReducer from './utilityReducer';

export default combineReducers({
  trip: tripReducer,
  utility: utilityReducer
});
