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
  auth: false
};

/////////////////////////// Actions

export const setUser = (payload: User): Payload => ({
  payload,
  type: CONSTANTS.SET_USER
});



///////////////////// Reducer

export const userReducer = (state: object = initialState, action: Payload) => {
  switch (action.type) {
    case CONSTANTS.SET_USER:
      return { auth: true, ...action.payload };

    default:
      return state;
  }
};

export default userReducer
