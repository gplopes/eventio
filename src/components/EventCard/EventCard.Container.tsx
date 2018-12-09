import React from "react";
import { connect } from "react-redux";

import EventCard from "./EventCard";
import EventCardSimplified from "./EventCard.Simplified";

// Utils
import beautifyDate from "../../utils/beautifyDate";
import trim from "../../utils/trim";

///////////////////////////////////// Props

type Props = {
  _id: string;
  user: {
    id: string;
  };
  title: string;
  trimDesc: boolean;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
  };
  startsAt: string;
  capacity: number;
  attendees: object[];
  description: string;
  big: boolean;
  simplified: boolean;
};

///////////////////////////////////////////// UI

function EventCardContainer(props: Props) {
  const {
    user: { id },
    owner,
    capacity,
    startsAt,
    attendees,
    description,
    trimDesc,
    _id,
    simplified
  } = props;

  const buttonProps = {
    myId: id,
    ownerId: owner.id,
    attendees,
    capacity,
    eventId: _id
  };

  const linkProps = { pathname: "/event", query: { id: _id } };
  const eventDesc = trimDesc ? trim(description, 100) : description;

  const propsThrough = {
    ...props,
    startsAt: beautifyDate(startsAt),
    buttonProps,
    linkProps,
    eventDesc
  };

  return !simplified ? (
    <EventCardSimplified {...propsThrough} />
  ) : (
    <EventCard {...propsThrough} />
  );
}

EventCardContainer.displayName = "EventCardContainer";
EventCardContainer.defaultProps = {
  simplified: false
};

///////////////////////////////////////////// Connnect

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(EventCardContainer);
