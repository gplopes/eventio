import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import { setEvents, fetchAllEvents } from "../store/eventsStore";

import urls from "../routes/urls";

import Page from "../layouts/Page";
import List from "../components/List/List";
import Action from "../components/ActionButton/ActionButton";

////////////////////////////////////////////////// Page Config

const pageProps = {
  name: "Dashboard",
  title: "My Eventio"
};

/////////////////////////////////////////////////////// Type

type Props = {
  events: object[];
  error: null | string;
  status: boolean;
  fetchAllEvents(): void;
  setEvents(event: object): void;
};

///////////////////////////////////////////////////////// UI

class Dashboard extends Component<Props> {
  componentDidMount() {
    this.props.fetchAllEvents();
  }
  actionHandler = () => Router.push(urls.NEW_EVENT);
  render() {
    const { events, status, error } = this.props;
    return (
      <Page {...pageProps}>
        <List events={events} loading={status} error={error}>
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

////////////////////////////////////////////////////////// Connect

const mapDispatchToProps = { setEvents, fetchAllEvents };

const mapStateToProps = (state: any) => {
  return {
    status: state.events.loading,
    error: state.events.error,
    events: state.events.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
