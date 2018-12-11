import React from "react";

import { FilterTypes } from "./List";

////////////////////////////////////////////////////////////// Filter

export const filterItem = (type: FilterTypes) => (data: any) => {
  const today = new Date();
  const eventDate = new Date(data.startsAt);
  if (type === FilterTypes.ALL_EVENTS) return true;

  if (type === FilterTypes.FUTURE_EVENTS && today < eventDate) {
    return true;
  }
  if (type === FilterTypes.PAST_EVENTS && today > eventDate) {
    return true;
  }
  return false;
};

/////////////////////////////////////////////// Config Context

const Context = React.createContext({});

export const Provider = Context.Provider;
export const withContext = (Wrapper: any) =>
  function WrapperList(props: any) {
    return (
      <Context.Consumer>
        {(ctx: any) => <Wrapper {...ctx} {...props} />}
      </Context.Consumer>
    );
  };
