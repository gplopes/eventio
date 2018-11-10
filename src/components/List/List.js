import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import isEqual from "lodash/isEqual";

import "./List.style.scss";

import { Section } from "../../layouts";

import EventCard from "../EventCard/EventCard";
import ListItem from "../ListItem/ListItem";

// Config
import { Provider, constants } from "./List.settings";
import FilterMenu from "./components/FilterMenu";
import ToggleLayout from "./components/ToggleLayout";
import NoEvent from "./components/NoEvent";

const filterItem = type => data => {
  const today = new Date();
  const eventDate = new Date(data.startsAt);
  if (type === constants.ALL_EVENTS) return true;

  if (type === constants.FUTURE_EVENTS && today < eventDate) {
    return true;
  }
  if (type === constants.PAST_EVENTS && today > eventDate) {
    return true;
  }
  return false;
};

export default class List extends PureComponent {
  // Inner Components
  static FilterMenu = FilterMenu;
  static ToggleLayout = ToggleLayout;

  static getDerivedStateFromProps(props, state) {
    if (isEqual(state.prevEvents, props.events)) return {};
    return {
      hasEvents: props.events.length > 0,
      prevEvents: props.events,
      events: props.events.filter(filterItem(constants.ALL_EVENTS))
    };
  }
  state = {
    prevEvents: [],
    events: [],
    hasLoaded: false,
    hasEvents: false,
    view: constants.GRID_VIEW,
    filter: constants.ALL_EVENTS
  };
  toggleView = view => {
    this.setState({ view });
  };

  toggleFilter = filter => {
    const { events } = this.props;
    const newEvents = events.filter(filterItem(filter));
    this.setState({
      filter,
      hasEvents: newEvents.length > 0,
      events: newEvents
    });
  };
  renderItem = event => {
    const { view } = this.state;
    const EventComponent = view === constants.GRID_VIEW ? EventCard : ListItem;
    return (
      <div className="col" key={event.id}>
        <EventComponent {...event} />
      </div>
    );
  };
  renderList = () => {
    const { grid } = this.props;
    const { events, view } = this.state;
    const colSize = view === constants.LIST_VIEW ? 1 : grid;
    return (
      <Section className="List-items">
        <div className={`cols-${colSize}`}>{events.map(this.renderItem)}</div>
      </Section>
    );
  };
  renderMsg = () => {
    const { hasLoaded } = this.props;
    const msg = hasLoaded ? "No Events" : "Loading events";
    return <NoEvent msg={msg} />
  }
  render() {
    const { children } = this.props;
    const { hasEvents } = this.state;
    const providerValue = {
      ...this.state,
      toggleFilter: this.toggleFilter,
      toggleView: this.toggleView
    };
    return (
      <Provider value={providerValue}>
        <Section className="List">{children}</Section>
        {hasEvents ? this.renderList() : this.renderMsg() }
      </Provider>
    );
  }
}

List.defaultProps = {
  grid: 3,
  title: null,
  events: [],
  hasLoaded: false,
};

List.propTypes = {
  grid: PropTypes.number,
  title: PropTypes.string,
  hasLoaded: PropTypes.bool,
  events: PropTypes.arrayOf(PropTypes.object)
};
