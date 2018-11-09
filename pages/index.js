import React, { Component } from "react";
import Router from "next/router";
import Page from "../src/layouts/Page";

import { withConsumer } from "../src/store";

import List from "../src/components/List/List";
import Action from "../src/components/ActionButton/ActionButton";

class Dashboard extends Component {
  handleAction = () => {
    Router.push("/event/create");
  };
  render() {
    const { events } = this.props;
    return (
      <Page className="Dashboard">
        <List events={events}>
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
