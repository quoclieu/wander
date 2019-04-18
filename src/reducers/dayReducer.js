const initState = {
  day: [
    {
      id: '1',
      tripId: '1',
      date: '1/2/2020',
      unplannedEvents: [
        {
          description: 'heading to blah'
        }
      ],
      plannedEvents: [
        {
          locationName: 'temple',
          lat: 12,
          lon: 12,
          description: 'temple shrine'
        }
      ]
    },
    {
      id: '2',
      tripId: '1',
      date: '2/2/2020',
      unplannedEvents: [
        {
          description: 'heading to home'
        }
      ],
      plannedEvents: [
        {
          locationName: 'airport',
          lat: 10,
          lon: 10,
          description: 'home'
        }
      ]
    }
  ]
};

export default (state = initState) => {
  return state;
};
