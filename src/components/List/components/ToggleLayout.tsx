import React from "react";
import classNames from 'classnames';

import Icon from "../../Icon/Icon";
import { withContext } from "../List.settings";
import { LayoutTypes } from "../List";


///////////////////////////////////////////// Styled



/////////////////////////////////////////////// Types

type IconType = {
  icon: Icon.Type;
  type: LayoutTypes;
  activeView: LayoutTypes;
  toggleView(val: LayoutTypes): void;
};

/////////////////////////////////////////////////// Render Icons

const renderIcon = withContext((params: IconType) => {
  const { icon, type, activeView, toggleView } = params;
  const active = activeView == type;
  return (
    <Icon
      className={classNames({ active })}
      onClick={() => toggleView(type)}
      type={icon}
    />
  );
});

////////////////////////////////////////////////// ToggleLayout

type ToggleType = {
  view: LayoutTypes;
  toggleView(): void;
};

function ToggleLayout(params: ToggleType) {
  const { view, toggleView } = params;
  return (
    <div className="flex-row">
      {renderIcon({
        icon: Icon.Type.grid,
        type: LayoutTypes.GRID_VIEW,
        activeView: view,
        toggleView
      })}
      {renderIcon({
        icon: Icon.Type.list,
        type: LayoutTypes.LIST_VIEW,
        activeView: view,
        toggleView
      })}
    </div>
  );
}

export default withContext(ToggleLayout);
