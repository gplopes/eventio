import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";

import "./TextInput.styles.scss";

class TextInput extends PureComponent {
  state = {
    value: "",
    isValid: true,
    isFocus: false,
    hasContent: false
  };

  handleFocus = () => {
    this.setState({ hasContent: true, isFocus: true, isValid: true });
  };

  handleBlur = () => {
    const { value } = this.state;
    const hasContent = value.length > 0;
    const isValid = hasContent && this.props.validator(value);

    this.setState({
      hasContent,
      isValid,
      isFocus: false,
    });
    this.props.onFinish({ value, isValid });
  };
  getVal = () => {
    const { value, isValid } = this.state;
    //const isValid = value.length > 0 && !invalid;

    return { value, isValid };
  };
  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  render() {
    const { hasContent, isFocus, value, isValid } = this.state;
    const { type, label, icon, iconType, errorMsg } = this.props;

    const wrapClasses = classNames("TextInput_wrap", {
      hasContent,
      invalid: !isValid && hasContent,
      isFocus
    });
    const inputProps = {
      type: isFocus && hasContent ? type : "text",
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
        {!isValid && hasContent && <small className="TextInput-alert">{errorMsg}</small>}
      </div>
    );
  }
}

TextInput.Icon = Icon.Type;

TextInput.defaultProps = {
  type: "name",
  icon: false,
  iconType: null,
  validator: () => true,
  errorMsg: "",
  onFinish: () => {}
};

TextInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.bool,
  iconType: PropTypes.oneOf(Object.values(Icon.Type)),
  validator: PropTypes.func,
  onFinish: PropTypes.func,
  errorMsg: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default TextInput;
