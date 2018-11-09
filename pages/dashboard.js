import React, { Component } from "react";
import Router from "next/router";
import Page from "../src/layouts/Page";

import { withConsumer } from "../src/store";
import eventApi from "../src/api/eventApi";

import List from "../src/components/List";
import Action from "../src/components/ActionButton";

class Dashboard extends Component {
  state = { hasLoaded: false };
  componentDidMount() {
    eventApi.allEvents().then(events => {
      console.log("hello", events);
      this.props.actions.saveEvents(events);
      this.setState({ hasLoaded: true });
    });
  }
  handleAction = () => {
    Router.push("/event/create");
  };
  render() {
    const { events } = this.props;
    return (
      <Page className="Dashboard" headerGap>
        <List events={events} hasLoaded={this.state.hasLoaded}>
          <div className="flex-row">
            <List.FilterMenu />
            <List.ToggleLayout />
          </div>
        </List>
        <Action onClick={this.handleAction} />
      </Page>
    );
  }
}

export default withConsumer(Dashboard);
