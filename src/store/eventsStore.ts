import eventApi from "../api/eventApi";
////////////////// Types

enum CONSTANTS {
  SET_EVENTS = "SET_EVENTS",
}

type Payload = {
  payload: object;
  type: CONSTANTS;
};

/////////////////////////// Actions Async

export const fetchAllEvents = () => {
  return (dispatch: any) => {
    eventApi.allEvents().then(events => {
      dispatch(setEvents(events));
    });
  };
};

export const joinEvent = (eventId: string) => {
  return (dispatch: any, getState: any) => {
    const { user } = getState();
    eventApi
      .joinEvent(eventId, user.token)
      .then(() => dispatch(fetchAllEvents()));
  };
};


export const leaveEvent = (eventId: string) => {
  return (dispatch: any, getState: any) => {
    const { user } = getState();
    eventApi
      .leaveEvent(eventId, user.token)
      .then(() => dispatch(fetchAllEvents()));
  };
};


/////////////////////////////////// Actions

export const setEvents = (payload: any): Payload => ({
  payload,
  type: CONSTANTS.SET_EVENTS
});

///////////////////// Reducer

export const eventsReducer = (state: object[] = [], action: Payload) => {
  switch (action.type) {
    case CONSTANTS.SET_EVENTS:
      return action.payload;

    default:
      return state;
  }
};

export default eventsReducer;
