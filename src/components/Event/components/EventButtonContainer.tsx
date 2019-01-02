import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

import url from "../../../routes/urls";

import { leaveEvent, joinEvent } from "../../../store/eventsStore";
import Button from "../../Button/Button";

///////////////////////////////////////////////// Types

type Props = {
  myId: string;
  ownerId: string;
  attendees: object[];
  eventId: string;
  capacity: number;
  leaveEvent: (eventId: string) => void;
  joinEvent: (eventId: string) => void;
};

///////////////////////////////////////////////////////////////// Helpers

type State = {
  color: Button.Type;
  text: string;
  action?: (event: string) => void;
};

function getButtonStates(params: Props): State {

  const state = {
    edit: {
      color: Button.Type.update,
      text: "edit",
      action: (eventId: string) =>
        Router.push({
          pathname: url.EVENT,
          query: { id: eventId, edit: true }
        })
    },
    leave: {
      color: Button.Type.alert,
      text: "leave",
      action: params.leaveEvent
    },
    join: {
      color: Button.Type.primary,
      text: "join",
      action: params.joinEvent
    },
    full: {
      color: Button.Type.disabled,
      text: "Full"
    }
  };

  /// I am the Creator
  if (params.ownerId === params.myId) return state.edit;

  /// Event Is Full
  if (params.attendees.length >= params.capacity) return state.full;


  /// I am on the event
  const amIAttendee = params.attendees.find((attendee: any) => attendee.id === params.myId);
  if (amIAttendee) return state.leave;

  //// I am not on the event
  return state.join;
}

////////////////////////////////////////////////////////////////////// UI

function EventButtonContainer(props: Props) {
  const { eventId } = props;
  const buttonInfo = getButtonStates({ ...props });

  return (
    <Button
      onClick={() => buttonInfo.action && buttonInfo.action(eventId)}
      color={buttonInfo.color}
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
)(EventButtonContainer);
