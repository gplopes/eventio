
import { combineReducers, createStore } from "redux";
import { userReducer } from "./userStore";
import { eventsReducer } from './eventsStore';


const reducers = combineReducers({ user: userReducer, events: eventsReducer });
export default createStore(reducers);


export * from "./Provider";
export * from "./Consumer";
