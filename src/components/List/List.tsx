import React, { PureComponent } from "react";

import isEqual from "lodash/isEqual";

import "./List.style.scss";

import { Section } from "../../layouts";

import EventCardContainer from "../EventCard/EventCard.Container";

// Config
import { Provider, filterItem } from "./List.settings";
import FilterMenu from "./components/FilterMenu";
import ToggleLayout from "./components/ToggleLayout";
import NoEvent from "./components/NoEvent";

///////////////////////////////////////// Types

export enum LayoutTypes {
  GRID_VIEW = "GRID_VIEW",
  LIST_VIEW = "LIST_VIEW"
}

export enum FilterTypes {
  ALL_EVENTS = "ALL EVENTS",
  FUTURE_EVENTS = "FUTURE EVENTS",
  PAST_EVENTS = "PAST EVENTS"
}

//////////////////////////////////// Props

type Props = {
  grid: number;
  title: string;
  hasLoaded: boolean;
  events: object[];
};

type State = {
  prevEvents: object[];
  events: object[];
  hasLoaded: boolean;
  hasEvents: boolean;
  view: LayoutTypes;
  filter: FilterTypes;
};

export default class List extends PureComponent<Props, State> {
  static defaultProps = {
    grid: 3,
    title: null,
    events: [],
    hasLoaded: false
  };
  // Inner Components
  static FilterMenu = FilterMenu;
  static ToggleLayout = ToggleLayout;

  static getDerivedStateFromProps(props: Props, state: State) {
    if (isEqual(state.prevEvents, props.events)) return {};
    return {
      hasEvents: props.events.length > 0,
      prevEvents: props.events,
      events: props.events.filter(filterItem(FilterTypes.FUTURE_EVENTS))
    };
  }
  state = {
    prevEvents: [],
    events: [],
    hasLoaded: false,
    hasEvents: false,
    view: LayoutTypes.GRID_VIEW,
    filter: FilterTypes.FUTURE_EVENTS
  };

  toggleView = (view: LayoutTypes) => {
    this.setState({ view });
  };

  toggleFilter = (filter: FilterTypes) => {
    const { events } = this.props;
    const newEvents = events.filter(filterItem(filter));
    this.setState({
      filter,
      hasEvents: newEvents.length > 0,
      events: newEvents
    });
  };

  renderItem = (event: any) => {
    const { view } = this.state;
    const isSimplified = view === LayoutTypes.GRID_VIEW;
    return (
      <div className="col" key={event.id}>
        <EventCardContainer {...event} trimDesc simplified={isSimplified} />
      </div>
    );
  };
  renderList = () => {
    const { grid } = this.props;
    const { events, view } = this.state;
    const colSize = view === LayoutTypes.LIST_VIEW ? 1 : grid;
    return (
      <Section className="List-items">
        <div className={`cols-${colSize}`}>{events.map(this.renderItem)}</div>
      </Section>
    );
  };
  renderMsg = () => {
    const { hasLoaded } = this.props;
    const msg = hasLoaded ? "No Events" : "Loading events";
    return <NoEvent msg={msg} />;
  };
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
        {hasEvents ? this.renderList() : this.renderMsg()}
      </Provider>
    );
  }
}