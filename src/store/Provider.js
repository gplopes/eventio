import React, { Component } from "react";

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
      getMyEvents: this.getMyEvents,
      getAllEvents: this.getAllEvents,
      joinEvent: this.joinEvent,
      leaveEvent: this.leaveEvent,
      createEvent: this.createEvent,

      editEvent: this.editEvent,
      getEvent: this.getEvent,
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
    return eventApi
      .joinEvent(eventId, this.state.user.token)
      .then(this.getAllEvents);
  };
  leaveEvent = eventId => {
    return eventApi
      .leaveEvent(eventId, this.state.user.token)
      .then(this.getAllEvents);
  };
  getAllEvents = () => {
    return eventApi.allEvents().then(this.saveEvents);
  };
  getMyEvents = () => {
    const { events } = this.state;
    if (events.length === 0)
      return this.getAllEvents().then(this._filterOnlyMyEvents);
    return new Promise(accept => accept(this._filterOnlyMyEvents()));
  };
  getEvent = eventId => {
    const event = this.state.events.find(({ id }) => id === eventId);
    if (event) return new Promise(accept => accept(event));

    return eventApi.getEvent(eventId);
  };

  createEvent = newEvent => {
    return eventApi.createEvent(newEvent, this.state.user.token);
  };

  // Private
  _filterOnlyMyEvents = () => {
    const { events, user } = this.state;

    const myEvents = events.filter(({ owner, attendees }) => {
      const myEvent = owner.id === user.id;
      const joined = attendees.filter(attendee => attendee.id === user.id);
      return myEvent || joined.length > 0;
    });

    return myEvents || [];
  };

  // Event Button State
  saveEvents = events => {
    this.setState({ events });
  };
  editEvent = () => {
    console.log("EDIT BUTTON");
  };

  render() {
    return (
      <Store.Provider value={{ ...this.state, actions: this.actions }}>
        {this.props.children}
      </Store.Provider>
    );
  }
}
