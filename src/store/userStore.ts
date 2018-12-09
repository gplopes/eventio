import { Reducer } from 'redux';
////////////////// Types

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
  auth: false,
  user: {}
};

/////////////////////////// Actions

export const setUser = (payload: User): Payload => ({
  payload,
  type: CONSTANTS.SET_USER
});

export const logout = (): Payload => ({
  payload: {},
  type: CONSTANTS.SET_LOGOUT
});

///////////////////// Reducer

export const userReducer = (state: object = initialState, action: Payload) => {
  switch (action.type) {
    case CONSTANTS.SET_USER:
      return { auth: true, ...action.payload };

    case CONSTANTS.SET_LOGOUT:
      document.cookie = "refreshToken=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
