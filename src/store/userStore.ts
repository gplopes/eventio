import { localUser, cookie } from "../services/auth";
//////////////////////////////////// Types

enum CONSTANTS {
  SET_USER,
  SET_LOGOUT
}

type User = any;

type Payload = {
  payload: object;
  type: CONSTANTS;
};

///////////////////////////// Initial State

const initialState = {
  user: {}
};

////////////////////////////////////////////////////// Actions

export const setUser = (payload: User): Payload => ({
  payload,
  type: CONSTANTS.SET_USER
});

const cleanUser = (): Payload => ({
  payload: {},
  type: CONSTANTS.SET_LOGOUT
});

/////////////////////////////////////////////////////// Async Actions

export const logout = () => {
  return (dispatch: any) => {
    cookie.reset();
    localUser.clean();
    return dispatch(cleanUser);
  };
};

///////////////////////////////////////////////////////// Reducer

export const userReducer = (state: object = initialState, action: Payload) => {
  switch (action.type) {
    case CONSTANTS.SET_USER:
      return { ...action.payload };
    case CONSTANTS.SET_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
