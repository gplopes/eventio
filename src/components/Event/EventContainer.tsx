import React from "react";
import { connect } from "react-redux";

import urls from "../../routes/urls";

import Card from "./Card";
import ListItem from "./ListItem";

// Component Utils
import beautifyDate from "./utils/beautifyDate";

// Global Utils
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
  isList: boolean;
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
    isList
  } = props;

  const buttonProps = {
    myId: id,
    ownerId: owner.id,
    attendees,
    capacity,
    eventId: _id
  };

  const linkProps = { pathname: urls.EVENT, query: { id: _id } };
  const eventDesc = trimDesc ? trim(description, 100) : description;

  const propsThrough = {
    ...props,
    startsAt: beautifyDate(startsAt),
    buttonProps,
    linkProps,
    eventDesc
  };

  return isList ? <ListItem {...propsThrough} /> : <Card {...propsThrough} />;
}

EventCardContainer.defaultProps = {
  isList: false
};

///////////////////////////////////////////// Connnect

const mapStateToProps = (state: any) => ({ user: state.user });
export default connect(mapStateToProps)(EventCardContainer);
