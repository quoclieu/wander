import { UPDATE_DATES } from '../actions';

const initState = {
  trips: [
    {
      id: '1',
      name: 'japan',
      startDate: '1/2/2020',
      endDate: '2/2/2020',
      travelDays: '2'
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_DATES:
      return action.payload;
    default:
      return state;
  }
};
