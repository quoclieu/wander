import {UPDATE_DATES} from '../actions';

export default (state = [],action) => {
  switch(action.type) {
    case UPDATE_DATES:
      return action.payload;
    default:
      return state;
  }
}
