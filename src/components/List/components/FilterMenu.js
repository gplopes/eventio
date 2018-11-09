import React from "react";
import classNames from "classnames";

import { constants, withContext } from "../List.settings";

const renderItem = ({ name, type, activeFilter, toggleFilter }) => {
  const active = activeFilter == type;
  return (
    <li className={classNames({ active })} onClick={() => toggleFilter(type)}>
      {name}
    </li>
  );
};

function FilterMenu({ filter, toggleFilter }) {
  return (
    <ul className="List-filter">
      {renderItem({
        name: "All events",
        type: constants.ALL_EVENTS,
        activeFilter: filter,
        toggleFilter
      })}
      {renderItem({
        name: "Future events",
        type: constants.FUTURE_EVENTS,
        activeFilter: filter,
        toggleFilter
      })}
      {renderItem({
        name: "Past events",
        type: constants.PAST_EVENTS,
        activeFilter: filter,
        toggleFilter
      })}
    </ul>
  );
}

export default withContext(FilterMenu);
