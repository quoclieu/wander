export const UPDATE_DATES = 'UPDATE_DATES';
export const updateDates = dates => {
  return {
    type: UPDATE_DATES,
    payload: dates
  };
};

export const TOGGLE_LOGOUT_MODAL = 'TOGGLE_LOGOUT_MODAL';
export const toggleLogOutModal = () => {
  return {
    type: TOGGLE_LOGOUT_MODAL
  };
};
