import React, { Component } from "react";
import Page from "../../src/layouts/Page";
import { withConsumer } from "../../src/store";
import getUserName from "../../src/utils/getUserName";

import EventForm from "../../src/components/EventForm/EventForm";
import EventDetail from "../../src/components/EventDetail/EventDetail";
import BackButton from "../../src/components/Header/components/BackIcon";
import EventCard from "../../src/components/EventCard/EventCard";
import TagName from "../../src/components/TagName/TagName";

const colEventSize = (100 / 3) * 2;
const colAttendeesSize = 100 - colEventSize;

class Event extends Component {
  static async getInitialProps({ query }) {
    return {
      showEdit: JSON.parse(query.edit || false),
      eventId: query.id || "",
      headerProps: {
        centerItem: <BackButton name="Back to events" />
      }
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { actions, eventId } = props;
    return {
      event: actions.getEvent(eventId)
    };
  }
  state = {
    event: {},
    showEdit: false
  };
  renderAttendees = () => {
    const { attendees } = this.state.event;
    return (
      <div
        className="Event-attendees card"
        style={{ width: `${colAttendeesSize}%` }}
      >
        <h3>Attendees</h3>
        {attendees.map(attendee => (
          <TagName name={getUserName(attendee).initials} />
        ))}
      </div>
    );
  };
  render() {
    const { showEdit } = this.props;
    const { event } = this.state;
    return (
      <Page>
        <EventDetail id={event.id} />
        <section>
          <div className="container flex-row">
            <div style={{ width: `${colEventSize}%` }}>
              {showEdit ? <EventForm /> : <EventCard {...event} size="big" />}
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default withConsumer(Event);
