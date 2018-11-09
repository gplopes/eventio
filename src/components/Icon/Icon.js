import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Icon.styles.scss";

function Icon({ type, onClick, className, size }) {
  const iconClasses = classNames("Icon", type, className, {
    [size]: size !== 'normal',
    clickable: onClick !== null
  });
  return <span onClick={onClick} className={iconClasses} />;
}

Icon.Type = {
  eye: "icon-eye",
  user: "icon-user",
  loading: "icon-loading",
  grid: "icon-grid",
  list: "icon-list",
  back: "icon-back",
  plus: "icon-plus",
  delete: "icon-delete",
  close: "icon-close",
  arrowBack: "icon-arrow",
};

Icon.defaultProps = {
  onClick: null,
  size: 'normal'
};

Icon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  type: PropTypes.oneOf(Object.values(Icon.Type)).isRequired
};

export default Icon;
