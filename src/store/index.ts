import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./userStore";
import { eventsReducer } from "./eventsStore";

import { localUser } from '../services/auth';

const reducers = combineReducers({ user: userReducer, events: eventsReducer });

// @ts-ignore
const reduxDevTools = typeof window === "object" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null;
const composeEnhancers = reduxDevTools ? reduxDevTools : compose;

// Hydrated Store
const initialState = {
  user: localUser.get() || undefined
};

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
