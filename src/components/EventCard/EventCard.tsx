import React from "react";
import Link from "next/link";

import "./EventCard.styles.scss";
import { EventCard } from "./style";

import Button from "./components/Button";

import Icon from "../Icon";

///////////////////////////////////// Props

type Props = {
  title?: string;
  owner?: {
    id: string;
    firstName: string;
    lastName: string;
  };
  startsAt?: string;
  capacity?: number;
  attendees?: object[];
  buttonProps?: any;
  linkProps?: any;
  eventDesc?: any;
};

///////////////////////////////////////////// UI

function EventCardDefault(props: Props) {
  const {
    startsAt,
    title,
    owner,
    capacity,
    attendees,
    buttonProps,
    linkProps,
    eventDesc
  } = props;

  return (
    <EventCard big>
      <p className="EventCard-date">{startsAt}</p>
      <Link href={linkProps}>
        <a className="EventCard-Link">
          <div className="EventCard-about">
            <h5>{title}</h5>
            {owner && (
              <p>
                {owner.firstName} {owner.lastName}
              </p>
            )}
          </div>
          <p className="EventCard-desc">{eventDesc}</p>
        </a>
      </Link>
      <div className="EventCard-footer flex-row">
        <div className="EventCard-attendees flex-row">
          <Icon type={Icon.Type.user} />
          {attendees && <span>{attendees.length} of {capacity}</span>}
        </div>
        <Button {...buttonProps} />
      </div>
    </EventCard>
  );
}


/////////////////////////////////

EventCardDefault.displayName = "EventCardDefault";
export default EventCardDefault;
