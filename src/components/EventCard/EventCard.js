import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withConsumer } from "../../store";
import "./styles.scss";
import beautifyDate from "../../utils/beautifyDate";

import Icon from "../Icon/Icon";
import ButtonWithState from "./components/EventCard.Button";

function EventCard({
  user: { id },
  startsAt,
  title,
  owner,
  capacity,
  attendees,
  description,
  size
}) {
  const buttonProps = { myId: id, ownerId: owner.id, attendees };
  const cardClasses = classNames("EventCard", { [size]: size !== "normal" });
  return (
    <div className={cardClasses}>
      <p className="EventCard-date">{beautifyDate(startsAt)}</p>
      <div className="EventCard-about">
        <h5>{title}</h5>
        <p>
          {owner.firstName} {owner.lastName}
        </p>
      </div>
      <p className="EventCard-desc">{description}</p>
      <div className="EventCard-footer flex-row">
        <div className="EventCard-attendees flex-row">
          <Icon type={Icon.Type.user} />
          <span>
            {attendees.length} of {capacity}
          </span>
        </div>
        <ButtonWithState {...buttonProps} />
      </div>
    </div>
  );
}

EventCard.defaultProps = {
  attendees: [],
  user: { id: 0 },
  size: "default"
};

EventCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  size: PropTypes.oneOf(["default", "big"]),
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

export default withConsumer(EventCard);