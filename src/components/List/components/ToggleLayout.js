import React from "react";
import classNames from "classnames";

import Icon from "../../Icon";
import { constants, withContext } from "../List.settings";

const renderIcon = withContext(({ icon, type, activeView, toggleView }) => {
  const active = activeView == type;
  return (
    <Icon
      className={classNames({ active })}
      onClick={() => toggleView(type)}
      type={icon}
    />
  );
});

function ToggleLayout({ view, toggleView }) {
  return (
    <div className="List-switcher flex-row">
      {renderIcon({
        icon: Icon.Type.grid,
        type: constants.GRID_VIEW,
        activeView: view,
        toggleView
      })}
      {renderIcon({
        icon: Icon.Type.list,
        type: constants.LIST_VIEW,
        activeView: view,
        toggleView
      })}
    </div>
  );
}

export default withContext(ToggleLayout);
