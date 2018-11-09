import React from "react";

// Config Context
const Context = React.createContext();

export const Provider = Context.Provider;
export const withContext = Wrapper =>
  function WrapperList(props) {
    return (
      <Context.Consumer>
        {context => <Wrapper {...context} {...props} />}
      </Context.Consumer>
    );
  };
// Constants
export const constants = {
  ALL_EVENTS: "ALL_EVENTS",
  FUTURE_EVENTS: "FUTURE_EVENTS",
  PAST_EVENTS: "PAST_EVENTS",
  GRID_VIEW: "GRID_VIEW",
  LIST_VIEW: "LIST_VIEW"
};

export const ALL_EVENTS = "ALL_EVENTS";
export const FUTURE_EVENTS = "FUTURE_EVENTS";
export const PAST_EVENTS = "PAST_EVENTS";

export const GRID_VIEW = "GRID_VIEW";
export const LIST_VIEW = "LIST_VIEW";
