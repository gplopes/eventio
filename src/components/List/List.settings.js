import React from "react";

// Constants
export const constants = {
  ALL_EVENTS: "ALL EVENTS",
  FUTURE_EVENTS: "FUTURE EVENTS",
  PAST_EVENTS: "PAST EVENTS",
  GRID_VIEW: "GRID_VIEW",
  LIST_VIEW: "LIST_VIEW"
};


// Filter
export const filterItem = type => data => {
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
