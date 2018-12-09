import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

import { leaveEvent, joinEvent } from "../../../store/eventsStore";
import Button from "../../Button/Button";

///////////////////////////////////////////////// Types

type Props = {
  myId: string;
  ownerId: string;
  attendees: object[];
  eventId: string;
  capacity: number;
};

///////////////////////////////////////////////////////////////// Helpers

type State = {
  type: Button.Type;
  text: string;
  action(event: string): void;
};

function getButtonStates(params: Props): State {
  const { ownerId, myId, attendees, capacity } = params;

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
      action: params.leaveEvent
    },
    join: {
      type: Button.Type.primary,
      text: "join",
      action: params.joinEvent
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

////////////////////////////////////////////////////////////////////// UI

function EventButton(props: Props) {
  const { eventId } = props;
  const buttonInfo = getButtonStates({ ...props });

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

//////////////////////////////////// Connect

const mapDispatchToProps = { joinEvent, leaveEvent };

export default connect(
  null,
  mapDispatchToProps
)(EventButton);
