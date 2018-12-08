////////////////// Types

enum CONSTANTS {
  SET_EVENTS = 'SET_EVENTS',
}

type Payload = {
  payload: object;
  type: CONSTANTS;
};

///////////////////////////// Initial State

const initialState = {
  events: []
};

/////////////////////////// Actions

export const setEvents = (payload: any): Payload => ({
  payload,
  type: CONSTANTS.SET_EVENTS
});



///////////////////// Reducer

export const eventsReducer = (state: object = initialState, action: Payload) => {
  switch (action.type) {
    case CONSTANTS.SET_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
};

export default eventsReducer;
