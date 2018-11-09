import React from "react";

function NoEvent({ msg }) {
  return (
    <section className="NoEvent">
      <div className="container centered-content">
        <img src="/static/helmet.svg" className="NoEvent-helmet" alt="Helmet" />
        <p>{msg}</p>
      </div>
    </section>
  );
}

NoEvent.defaultProps = {
  msg: "No Events"
};

export default NoEvent;
