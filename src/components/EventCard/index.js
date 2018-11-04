import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

function EventCard({
  startsAt,
  title,
  owner,
  capacity,
  attendees,
  description
}) {
  return (
    <div className="EventCard">
      <small className="EventCard_date">{startsAt}</small>
      <div className="EventCard_about">
        <h4>{title}</h4>
        <small>
          {owner.firstName} {owner.lastName}
        </small>
      </div>
      <p>{description}</p>
      <div className="EventCard_footer flex-row">
        <div className="EventCard_attendees flex-row">
          <Icon type={Icon.Types.profile} />
          {attendees.length} of {capacity}
        </div>
        <Button type={Button.Types.update} size="small">
          Edit
        </Button>
      </div>
    </div>
  );
}

EventCard.defaultProps = {
  attendees: []
};

EventCard.propTypes = {
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

export default EventCard;
