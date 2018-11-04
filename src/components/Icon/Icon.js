import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Icon.styles.scss";

function Icon({ type }) {
  return <div className={classNames("Icon", type)} />;
}

Icon.Type = {
  eye: "icon-eye",
  loading: "icon-loading"
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(Icon.Type))
}

export default Icon;
