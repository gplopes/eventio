import React, { Component } from "react";
import cookies from "next-cookies";

import { eventApi } from "../api";
import Store from "./StoreContext";

const initialValue = {
  events: [],
  auth: false,
  user: {}
};
export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      ...initialValue
    };

    // Store Actions
    this.actions = {
      // User
      isMe: this.isMe,
      isAuth: this.isAuth,
      setUser: this.setUser,
      setLogout: this.setLogout,

      // Events
      joinEvent: this.joinEvent,
      leaveEvent: this.leaveEvent,

      editEvent: this.editEvent,
      getEvent: this.getEvent,
      myEvents: this.myEvents,
      saveEvents: this.saveEvents
    };
  }

  // USER ACTIONS
  isMe = userId => this.state.user.id === userId;
  isAuth = () => this.state.auth;
  setUser = user => this.setState({ user, auth: true });
  setLogout = () => {
    this.setState(initialValue);
    document.cookie = "refreshToken=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
  };
  // EVENT ACTIONS
  joinEvent = eventId => {
    eventApi.joinEvent(eventId, this.state.user.token).then(this.getAllEvents)
  };
  leaveEvent = (eventId) => {
    eventApi.leaveEvent(eventId, this.state.user.token).then(this.getAllEvents)
  }

  // Refresh Events List
  getAllEvents = () => {
    eventApi.allEvents().then(this.saveEvents);
  }


  // Event Button State
  saveEvents = events => {
    this.setState({ events });
  };
  editEvent = () => {
    console.log("EDIT BUTTON");
  };
  myEvents = () => {
    const { events, user } = this.state;
    const myEvents = events.filter(({ owner }) => owner.id === user.id);
    return myEvents || [];
  };

  getEvent = eventId => {
    const event = this.state.events.find(({ id }) => id === eventId);
    return event;
  };
  render() {
    return (
      <Store.Provider value={{ ...this.state, actions: this.actions }}>
        {this.props.children}
      </Store.Provider>
    );
  }
}
