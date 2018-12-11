import React, { Component } from "react";
import { connect } from "react-redux";

import { EventType, fetchAllEvents } from "../store/eventsStore";
import { Page } from "../layouts";

import List from "../components/List/List";
import ProfileHeader from "../components/ProfileHeader";

////////////////////////////////////////////////// Page Config

const pageProps = {
  name: "Profile",
  title: "My Profile",
  headerGap: true
};

////////////////////////////////////////// Types

type Props = {
  events: object[];
  error: null | string;
  hasLoaded: boolean;
  fetchAllEvents(): void;
};

///////////////////////////////////////// UI

class Profile extends Component<Props> {
  componentDidMount() {
    this.props.events.length === 0 && this.props.fetchAllEvents();
  }
  render() {
    const { events, hasLoaded } = this.props;
    return (
      <Page {...pageProps}>
        <ProfileHeader />
        <List events={events} hasLoaded={hasLoaded}>
          <div className="flex-row">
            <h5>My Events</h5>
            <List.ToggleLayout />
          </div>
        </List>
      </Page>
    );
  }
}

/////////////////////////////////////////// Connect

// Private
const onlyMyEvents = (events: EventType[], myId: string) => {
  return [];
  return events.filter(({ owner, attendees }) => {
    const myEvent = owner.id === myId;
    const joined = attendees.filter(attendee => attendee.id === myId);
    return myEvent || joined.length > 0;
  });
};

const mapStateToProps = (state: any) => {
  return {
    hasLoaded: state.events.loading,
    error: state.events.error,
    events: onlyMyEvents(state.events.list, state.user.id)
  };
};

const mapDispatchToProps = { fetchAllEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
