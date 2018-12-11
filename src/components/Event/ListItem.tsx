import React from "react";
import Link from "next/link";

import { ListItemStyled } from './ListItem.style';

import trim from "../../utils/trim";
import Button from "./components/EventButtonContainer";

///////////////////////////////////// Props

type Props = {
  title?: string;
  description?: string;
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

/////////////////////////////////////////////////////////

function Desc({ title, description, linkProps }: any) {
  return (
    <Link href={linkProps}>
      <a className="flex-row ListItem-wrap">
        <h6 className="strong">{title}</h6>
        <p className="ListItem-desc">{trim(description, 31)}</p>
      </a>
    </Link>
  );
}

function Info({ startsAt, attendees, capacity, owner }: any) {
  return (
    <div className="flex-row" style={{ flex: 1 }}>
      <p className="ListItem-owner">
        {owner.firstName} {owner.lastName}
      </p>
      <span className="ListItem-date">{startsAt}</span>
      <span className="ListItem-attendees">
        {attendees.length} of {capacity}
      </span>
    </div>
  );
}

function EventCardSimplified(props: Props) {
  const {
    startsAt,
    title,
    owner,
    capacity,
    attendees,
    buttonProps,
    description,
    linkProps,
  } = props;

  return (
    <ListItemStyled className="flex-row">
      <div className="ListItem-event flex-row">
        <Desc
          title={title}
          description={description}
          linkProps={linkProps}
        />
        <div className="flex-row ListItem-info">
          <Info
            owner={owner}
            startsAt={startsAt}
            attendees={attendees}
            capacity={capacity}
          />
          <div>
            <Button {...buttonProps} />
          </div>
        </div>
      </div>
    </ListItemStyled>
  );
}

export default EventCardSimplified;
