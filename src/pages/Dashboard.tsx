import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { setEvents, fetchAllEvents } from "../store/eventsStore";

import Page from "../layouts/Page";
import List from "../components/List/List";
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
  fetchAllEvents(): void;
  setEvents(event: object): void;
};

type State = {
  hasLoaded: boolean;
};

//////////////////////////////////////////////// UI

class Dashboard extends Component<Props, State> {
  state = { hasLoaded: true };
  componentDidMount() {
    this.props.fetchAllEvents();
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

const mapDispatchToProps = { setEvents, fetchAllEvents };

const mapStateToProps = (state: any) => {
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
