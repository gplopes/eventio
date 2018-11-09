import React from "react";
import PropTypes from "prop-types";
import beautifyDate from "../../utils/beautifyDate";

import "./styles.scss";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

function ListItem({
  startsAt,
  title,
  owner,
  capacity,
  attendees,
  description
}) {
  return (
    <div className="ListItem flex-row">
      <h6 className="strong">{title}</h6>
      <p className="ListItem-desc">{description}</p>
      <p className="ListItem-owner">
        {owner.firstName} {owner.lastName}
      </p>
      <span className="ListItem-date">{beautifyDate(startsAt)}</span>
      <span className="ListItem-attendees">{attendees.length} of {capacity}</span>
      <Button type={Button.Type.update} size="small">
        Edit
      </Button>
    </div>
  );
}

ListItem.defaultProps = {
  attendees: []
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

export default ListItem;