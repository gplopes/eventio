import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { setEvents } from "../store/eventsStore";

import Page from "../layouts/Page";

import { eventApi } from "../api";

import List from "../components/List";
import Action from "../components/ActionButton/ActionButton";

// Page Config
const pageProps = {
  name: "Dashboard",
  title: "My Dashboard",
  headerGap: true
};

//////////////////////////////////////////// Type

type Props = {
  events: object[];
  setEvents(event: object): void;
};

type State = {
  hasLoaded: boolean;
};

//////////////////////////////////////////////// UI

class Dashboard extends Component<Props, State> {
  state = { hasLoaded: false };
  componentDidMount() {
    eventApi.allEvents().then(events => {
      this.props.setEvents(events);
      this.setState({ hasLoaded: true });
    });
  }
  actionHandler = () => {
    Router.push("/event/new");
  };
  render() {
    const { events } = this.props;
    return (
      <Page {...pageProps}>
        <List events={events} hasLoaded={this.state.hasLoaded}>
          <div className="flex-row">
            <List.FilterMenu />
            <List.ToggleLayout />
          </div>
        </List>
        <Action onClick={this.actionHandler} />
      </Page>
    );
  }
}

//////////////////////////// Connect

const mapDispatchToProps = { setEvents };

const mapStateToProps = (state: any) => {
  return {
    events: state.events.events
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
