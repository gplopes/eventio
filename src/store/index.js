import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./userStore";
import { eventsReducer } from "./eventsStore";

const reducers = combineReducers({ user: userReducer, events: eventsReducer });
export default createStore(reducers, applyMiddleware(thunk));
