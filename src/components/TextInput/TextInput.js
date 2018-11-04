import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";

import "./TextInput.styles.scss";

class TextInput extends PureComponent {
  state = {
    value: "",
    invalid: false,
    isFocus: false,
    hasContent: false
  };

  handleFocus = () => {
    this.setState({ hasContent: true, isFocus: true });
  };
  handleBlur = () => {
    const { value } = this.state;
    const hasContent = value.length > 0;
    const isValid = hasContent ? this.props.validator(value) : true;

    this.setState({
      hasContent,
      isFocus: false,
      invalid: !isValid
    });
    this.props.onFinish({ value, isValid });
  };
  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  render() {
    const { hasContent, isFocus, value, invalid } = this.state;
    const { type, label, icon, iconType, errorMsg } = this.props;

    const wrapClasses = classNames("TextInput_wrap", {
      hasContent,
      invalid,
      isFocus
    });
    const inputProps = {
      type,
      value: value,
      className: "TextInput-input",
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange
    };
    return (
      <div className="TextInput">
        <div className={wrapClasses}>
          <span className="TextInput-label">{label}</span>
          <input {...inputProps} />
          {icon && <Icon type={iconType} />}
        </div>
        {invalid && <small className="TextInput-alert">{errorMsg}</small>}
      </div>
    );
  }
}

TextInput.Icon = Icon.Type;

TextInput.defaultProps = {
  type: "name",
  icon: false,
  iconType: "",
  validator: () => true,
  errorMsg: "Wrong email address",
  onFinish: () => {}
};

TextInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.bool,
  iconType: PropTypes.oneOf(Icon.Type),
  validator: PropTypes.func,
  onFinish: PropTypes.func,
  errorMsg: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default TextInput;
