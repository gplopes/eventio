import React from "react";
import Icon from "../Icon/Icon";

import "./ActionButton.style.scss";

export default ({ onClick }) => (
  <button className="ActionButton" onClick={onClick}>
    <Icon type={Icon.Type.plus} />
  </button>
);
