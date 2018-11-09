import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icon";

import "./TextInput.styles.scss";

const isDateOrTime = type => {
  return type === "date" || type === "time";
};

class TextInput extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (isDateOrTime(props.type)) {
      return {
        hasContent: true
      };
    }
    return {};
  }
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true,
      isFocus: false,
      hasContent: false
    };

    this.inputProps = {
      // type,
      // value: value,
      className: "TextInput-input",
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange
    };
  }

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
      isFocus: false
    });
    this.props.onFinish({ value, isValid });
  };
  getVal = () => this.state.value;
  isValid = () => this.state.isValid;

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  _renderErr = () => {
    const { errorMsg } = this.props;
    return <small className="TextInput-alert">{errorMsg}</small>;
  };
  render() {
    const { hasContent, isFocus, value, isValid } = this.state;
    const { type, label, icon, iconType } = this.props;

    const wrapClasses = classNames("TextInput_wrap", {
      hasContent,
      invalid: !isValid && hasContent,
      isFocus
    });
    const showErr = !isValid && hasContent;
    return (
      <div className="TextInput">
        <div className={wrapClasses}>
          <span className="TextInput-label">{label}</span>
          <input {...this.inputProps} type={type} value={value} />
          {icon && <Icon type={iconType} />}
        </div>
        {showErr && this._renderErr()}
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
