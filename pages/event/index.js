import React, { PureComponent, Fragment } from "react";
import ErrorPage from "../_error";

import Page from "../../src/layouts/Page";
import { withConsumer } from "../../src/store";
import getUserName from "../../src/utils/getUserName";

import EventForm from "../../src/components/EventForm";
import EventDetail from "../../src/components/EventDetail";
import BackButton from "../../src/components/Header/components/BackIcon";
import EventCard from "../../src/components/EventCard";
import TagName from "../../src/components/TagName";

const colEventSize = (100 / 3) * 2;
const colAttendeesSize = 100 - colEventSize;

class Event extends PureComponent {
  static headerProps = {
    centerItem: <BackButton name="Back to events" />
  };
  static async getInitialProps({ query }) {
    return {
      showEdit: JSON.parse(query.edit || false),
      eventId: query.id || false
    };
  }
  state = {
    event: {},
    hasLoaded: false,
    showEdit: false
  };
  componentDidMount() {
    if (!this.props.eventId) return false;

    this.props.actions.getEvent(this.props.eventId).then(({event}) => {
      this.setState({ event, hasLoaded: true });
    });
  }
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
  renderContent() {
    const { showEdit } = this.props;
    const { event } = this.state;
    return (
      <Fragment>
        <EventDetail id={event.id} />
        <section>
          <div className="container flex-row">
            <div style={{ width: `${colEventSize}%` }}>
              {showEdit ? <EventForm /> : <EventCard {...event} size="big" />}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
  render() {
    const { hasLoaded } = this.state;

    if (!this.props.eventId) return <ErrorPage />;
    return <Page>{hasLoaded && this.renderContent()}</Page>;
  }
}

export default withConsumer(Event);
