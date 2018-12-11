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
  auth: true,
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
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
