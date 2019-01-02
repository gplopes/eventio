import eventApi from "../api/eventApi";

////////////////// Types

enum CONSTANTS {
  SET_EVENTS = "SET_EVENTS",
  FETCH_LOADING = "FETCH_LOADING",
  FETCH_ERROR = "FETCH_ERROR"
}

export type EventType = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  attendees: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  }[];
};


type Payload = {
  payload: object;
  type: CONSTANTS;
};

////////////////////////////////////////////////////////  Actions

export const setEvents = (events: object[]): Payload => ({
  payload: {
    list: events,
    loading: false,
    error: null
  },
  type: CONSTANTS.SET_EVENTS
});

const loadingEvents = (): Payload => ({
  payload: {
    error: null,
    loading: true
  },
  type: CONSTANTS.FETCH_LOADING
});

const errorEvents = (errMsg: string): Payload => ({
  payload: {
    error: errMsg,
    loading: false
  },
  type: CONSTANTS.FETCH_ERROR
});

///////////////////////////////////////////////// Actions Async

export const fetchAllEvents = () => {
  return (dispatch: any) => {
    dispatch(loadingEvents());
    eventApi
      .allEvents()
      .then(events => dispatch(setEvents(events)))
      .catch(err => dispatch(errorEvents(err.message)));
  };
};

export const joinEvent = (eventId: string) => {
  return (dispatch: any, getState: any) => {
    const { user } = getState();
    eventApi
      .joinEvent(eventId, user.authToken)
      .then(() => dispatch(fetchAllEvents()));
  };
};

export const leaveEvent = (eventId: string) => {
  return (dispatch: any, getState: any) => {
    const { user } = getState();
    eventApi
      .leaveEvent(eventId, user.authToken)
      .then(() => dispatch(fetchAllEvents()));
  };
};

//////////////////////////////////////////////// InitialStage

type State = {
  list: object[];
  error?: string | null;
  loading: boolean;
};

const initialStage: State = {
  list: [],
  error: null,
  loading: true
};

////////////////////////////////////////////////////////////////// Reducer

export const eventsReducer = (state = initialStage, action: Payload): State => {
  switch (action.type) {
    case CONSTANTS.SET_EVENTS:
    case CONSTANTS.FETCH_LOADING:
    case CONSTANTS.FETCH_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default eventsReducer;
