import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.styles.scss";
import Icon from '../Icon/Icon';

function Button({ children, type, size, disabled, onClick, loading }) {
  const buttonClasses = classNames(
    "Button",
    `button-${type}`,
    `button-${size}`,
    { disabled, loading }
  );
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled || loading}>
      {loading ? <Icon type={Icon.Type.loading} /> : children }
    </button>
  );
}


Button.Type = {
  primary: "primary",
  update: "update",
  alert: "alert"
};

Button.Size = {
  small: 'small',
  default: 'default',
  big: 'big'
};

Button.defaultProps = {
  type: Button.Type.primary,
  disabled: false,
  loading: false,
  size: Button.Size.big,
  onClick: function() {}
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(Button.Type)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(Button.Size)),
  onClick: PropTypes.func
};

export default Button;
