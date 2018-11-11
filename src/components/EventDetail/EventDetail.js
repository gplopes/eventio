import React from "react";

import "./EventDetail.styles.scss";

import Icon from "../Icon/Icon";

function EventDetailHeader({ id, showDelete, handleDelete }) {
  return (
    <section className="EventDetail">
      <div className="container flex-row">
        <p className="EventDetail-id">Detail event: {id}</p>
        {showDelete && (
          <div className="flex-row EventDetail-delete" onClick={handleDelete}>
            <Icon type={Icon.Type.delete} />
            <span>Delete Event</span>
          </div>
        )}
      </div>
    </section>
  );
}

EventDetailHeader.defaultProps = {
  id: "",
  showDelete: false,
  handleDelete: function() {}
};

export default EventDetailHeader;
