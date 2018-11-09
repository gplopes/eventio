import React, { Component } from "react";

import Store from "./StoreContext";

const dummyEvents = [
  {
    id: "58493db9691ecc0d3da51bfd",
    title: "Awesome event",
    description: "A bunch of people doing awesome stuff",
    startsAt: "2016-12-08T10:46:33.901Z",
    capacity: 50,
    owner: {
      id: "58493e0b691ecc0d3da51bfe",
      firstName: "Robert",
      lastName: "Rossmann",
      email: "robert.rossmann@strv.com",
      createdAt: "2016-12-08T10:46:33.901Z",
      updatedAt: "2016-12-08T10:46:33.901Z"
    },
    attendees: [
      {
        id: "58493e0b691ecc0d3da51bfe",
        firstName: "Robert",
        lastName: "Rossmann",
        email: "robert.rossmann@strv.com",
        createdAt: "2016-12-08T10:46:33.901Z",
        updatedAt: "2016-12-08T10:46:33.901Z"
      }
    ],
    createdAt: "2016-12-08T10:46:33.901Z",
    updatedAt: "2016-12-08T10:46:33.901Z"
  }
];

export class Provider extends Component {
  state = {
    events: dummyEvents,
    auth: false,
    user: {
      id: "58493e0b691ecc0d3da51bfe",
      firstName: "Robert",
      lastName: "Rossmann",
      email: "robert.rossmann@strv.com",
      createdAt: "2016-12-08T10:46:33.901Z",
      updatedAt: "2016-12-08T10:46:33.901Z"
    }
  };

  // Event Button State
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
  isMe = userId => {
    return user.id === userId;
  };
  render() {
    const actions = {
      isMe: this.isMe,
      editEvent: this.editEvent,
      getEvent: this.getEvent,
      myEvents: this.myEvents
    };
    return (
      <Store.Provider value={{ ...this.state, actions }}>
        {this.props.children}
      </Store.Provider>
    );
  }
}
