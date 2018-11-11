import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./ListItem.styles.scss";

import { withConsumer } from "../../store";
import trim from "../../utils/trim";
import beautifyDate from "../../utils/beautifyDate";
import { ButtonWithState } from "../Button";

function Desc({ title, description }) {
  return (
    <div className="flex-row ListItem-wrap">
      <h6 className="strong">{title}</h6>
      <p className="ListItem-desc">{trim(description, 31)}</p>
    </div>
  );
}

function Info({ startsAt, attendees, capacity, owner }) {
  return (
    <div className="flex-row" style={{flex: 1}}>
      <p className="ListItem-owner">
        {owner.firstName} {owner.lastName}
      </p>
      <span className="ListItem-date">{beautifyDate(startsAt)}</span>
      <span className="ListItem-attendees">
        {attendees.length} of {capacity}
      </span>
    </div>
  );
}

function ListItem({
  user: { id },
  _id,
  startsAt,
  title,
  owner,
  capacity,
  attendees,
  description
}) {
  const buttonProps = { myId: id, ownerId: owner.id, attendees, eventId: _id };
  return (
    <div className="ListItem flex-row">
      <div className="ListItem-event flex-row">
        <Desc title={title} description={description} />
        <div className="flex-row ListItem-info">
          <Info
            owner={owner}
            startsAt={startsAt}
            attendees={attendees}
            capacity={capacity}
          />
          <div>
            <ButtonWithState {...buttonProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

ListItem.defaultProps = {
  attendees: [],
  user: { id: 0 }
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startsAt: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  attendees: PropTypes.array,
  owner: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
};

export default withConsumer(ListItem);
