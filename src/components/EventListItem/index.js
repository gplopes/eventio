import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

function EventListItem({
  startsAt,
  title,
  owner,
  capacity,
  attendees,
  description
}) {
  return (
    <div className="EventListItem flex-row">
      <span className="strong">{title}</span>
      <span>{description}</span>
      <span>
        {owner.firstName} {owner.lastName}
      </span>
      <span className="EventListItem_date">{startsAt}</span>
      {attendees.length} of {capacity}
      <Button type={Button.Types.update} size="small">
        Edit
      </Button>
    </div>
  );
}

EventListItem.defaultProps = {
  attendees: []
};

EventListItem.propTypes = {
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

export default EventListItem;
