import { TOGGLE_LOGOUT_MODAL } from '../actions';

const initState = {
  modals: {
    logOut: false
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_LOGOUT_MODAL:
      if (state.modals.logOut) {
        return {
          ...state,
          modals: {
            ...state.modals,
            logOut: false
          }
        };
      }
      return {
        ...state,
        modals: {
          ...state.modals,
          logOut: true
        }
      };
    default:
      return state;
  }
};
