import React from "react";
import Router from "next/router";

import { withConsumer } from "../../../store";
import Button from "../../Button/Button";

///////////////////////////////////////////////// Types

type Props = {
  myId: string;
  ownerId: string;
  attendees: object[];
  actions: {
    leaveEvent(): void;
    joinEvent(): void;
  };
  eventId: string;
  capacity: number;
};

///////////////////////////////////////////////////////////////// Helpers

type ButtonState = {
  myId: string;
  ownerId: string;
  attendees: object[];
  actions: {
    leaveEvent(): void;
    joinEvent(): void;
  };
  capacity: number;
};

type State = {
  type: Button.Type;
  text: string;
  action(event: string): void;
}


function getButtonStates(params: ButtonState): State {
  const { ownerId, myId, attendees, actions, capacity } = params;

  const state = {
    edit: {
      type: Button.Type.update,
      text: "edit",
      action: (eventId: string) =>
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
      action: () => {}
    }
  };

  // I am the Creator
  if (ownerId === myId) return state.edit;

  // I am on the event
  const amIAttendee = attendees.find((attendee: any) => attendee.id === myId);
  if (amIAttendee) return state.leave;

  // Event Is Full
  if (attendees.length >= capacity) return state.full;

  // I am not on the event
  return state.join;
}

/////////////////////////////////////////////// UI

function EventButton(props: Props) {
  const {
    myId,
    ownerId,
    attendees,
    actions,
    eventId,
    capacity,
  } = props;

  const buttonInfo = getButtonStates({
    myId,
    ownerId,
    attendees,
    actions,
    capacity
  });

  return (
    <Button
      onClick={() => buttonInfo.action(eventId)}
      type={buttonInfo.type}
      size={Button.Size.small}
    >
      {buttonInfo.text}
    </Button>
  );
}

export default withConsumer(EventButton);
