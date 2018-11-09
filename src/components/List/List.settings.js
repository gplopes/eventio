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
  ALL_EVENTS: "ALL EVENTS",
  FUTURE_EVENTS: "FUTURE EVENTS",
  PAST_EVENTS: "PAST EVENTS",
  GRID_VIEW: "GRID_VIEW",
  LIST_VIEW: "LIST_VIEW"
};
