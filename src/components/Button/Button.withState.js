import React from "react";
import Router from "next/router";

import { withConsumer } from "../../store";

import Button from "./Button";

const buttonStates = ({ ownerId, myId, attendees, actions, capacity }) => {
  const state = {
    edit: {
      type: Button.Type.update,
      text: "edit",
      action: (eventId) =>
        Router.push({
          pathname: "/event",
          query: { id: eventId, edit: true }
        })
    },
    leave: {
      type: Button.Type.alert,
      text: "leave",
      action: actions.leaveEvent
    },
    join: {
      type: Button.Type.primary,
      text: "join",
      action: actions.joinEvent
    },
    full: {
      type: Button.Type.disabled,
      text: "Full",
      action: () => {},
    }
  };

  // I am the Creator
  if (ownerId === myId) return state.edit;

  // I am on the event
  const amIAttendee = attendees.find(attendee => attendee.id === myId);
  if (amIAttendee) return state.leave;

  // Event Is Full
  if (attendees.length >= capacity) return state.full;


  // I am not on the event
  return state.join;
};

function ButtonWithState({ myId, ownerId, attendees, actions, eventId, capacity }) {
  const buttonInfo = buttonStates({ myId, ownerId, attendees, actions, capacity });
  return (
    <Button
      onClick={() => buttonInfo.action(eventId)}
      type={buttonInfo.type}
      size="small"
    >
      {buttonInfo.text}
    </Button>
  );
}

export default withConsumer(ButtonWithState);
