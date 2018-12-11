import React from "react";
import Link from "next/link";

import {
  CardStyled,
  Attendees,
  Footer,
  Desc,
  About,
  Href,
  StartsAt
} from "./Card.style";

import Button from "./components/EventButtonContainer";
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
    <CardStyled>
      <StartsAt>{startsAt}</StartsAt>
      <Link href={linkProps}>
        <Href>
          <About>
            <h5>{title}</h5>
            {owner && (
              <p>
                {owner.firstName} {owner.lastName}
              </p>
            )}
          </About>
          <Desc>{eventDesc}</Desc>
        </Href>
      </Link>
      <Footer className="flex-row">
        <Attendees className="flex-row">
          <Icon type={Icon.Type.user} />
          {attendees && (
            <span>
              {attendees.length} of {capacity}
            </span>
          )}
        </Attendees>
        <Button {...buttonProps} />
      </Footer>
    </CardStyled>
  );
}

/////////////////////////////////

EventCardDefault.displayName = "EventCardDefault";
export default EventCardDefault;
