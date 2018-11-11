import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Page from "../src/layouts/Page";

import { withConsumer } from "../src/store";
import { eventApi } from "../src/api";

import List from "../src/components/List";
import Action from "../src/components/ActionButton";


// Page Config
const pageProps = {
  name: "Dashboard",
  title: "My Dashboard",
};

class Dashboard extends Component {
  state = { hasLoaded: false };
  componentDidMount() {
    eventApi.allEvents().then(events => {
      this.props.actions.saveEvents(events);
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

Dashboard.defaultProps = {
  events: [],
};

Dashboard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    saveEvents: PropTypes.func.isRequired
  }).isRequired
};

export default withConsumer(Dashboard);
