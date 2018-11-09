import React from "react";
import PropTypes from "prop-types";

import "./ListItem.styles.scss";

import { withConsumer } from "../../store";
import trim from "../../utils/trim";
import beautifyDate from "../../utils/beautifyDate";
import { ButtonWithState } from "../Button";

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
      <h6 className="strong">{title}</h6>
      <p className="ListItem-desc">{trim(description, 31)}</p>
      <p className="ListItem-owner">
        {owner.firstName} {owner.lastName}
      </p>
      <span className="ListItem-date">{beautifyDate(startsAt)}</span>
      <span className="ListItem-attendees">
        {attendees.length} of {capacity}
      </span>
      <ButtonWithState {...buttonProps } />
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
