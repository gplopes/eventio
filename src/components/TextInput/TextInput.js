import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icon";

import "./TextInput.styles.scss";

// Helper
const isDateOrTime = type => {
  return type === "date" || type === "time";
};
const requiredErrorMsg = labelName => `${labelName} has to be filled up`;

class TextInput extends PureComponent {
  static getDerivedStateFromProps(props) {
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
      errorMsg: "",
      isValid: true,
      isFocus: false,
      hasContent: false
    };

    this.inputProps = {
      className: "TextInput-input",
      onBlur: this.blurHandler,
      onFocus: this.focusHandler,
      onChange: this.changeHandler
    };
  }

  // Validation
  validationChecker = () => {
    const { required, label } = this.props;
    const { value } = this.state;
    const validator = this.props.validator(value);
    const hasContent = value.length > 0;

    // Update Error Msg According to Validation
    const errorMsgType = !validator.valid ? validator.error : requiredErrorMsg(label);
    this.setState({ errorMsg: errorMsgType });

    // Return Status
    if (required) return validator.valid && hasContent;
    else if (!hasContent) return true;
    else return validator.valid;
  };

  // Handlers:
  focusHandler = () => {
    this.setState({ hasContent: true, isFocus: true, isValid: true });
  };

  blurHandler = () => {
    const { value } = this.state;
    const hasContent = value.length > 0;
    const isValid = this.validationChecker();

    this.setState({
      hasContent,
      isValid,
      isFocus: false
    });
    this.props.onFinish({ value, isValid });
  };
  changeHandler = evt => {
    this.setState({ value: evt.target.value });
  };

  // Public Functions
  getVal = () => this.state.value;
  isValid = () => {
    const isValid = this.validationChecker();
    this.setState({ isValid });
    return isValid;
  };

  // Renders
  _renderErr = () => {
    const { errorMsg } = this.state;
    return <small className="TextInput-alert">{errorMsg}</small>;
  };

  render() {
    const { hasContent, isFocus, value, isValid } = this.state;
    const { type, label, icon, iconProps, required } = this.props;

    const star = required ? "*" : "";
    const wrapClasses = classNames("TextInput_wrap", {
      hasContent,
      invalid: !isValid,
      isFocus
    });

    return (
      <div className="TextInput">
        <div className={wrapClasses}>
          <span className="TextInput-label">
            {label} {star}
          </span>
          <input {...this.inputProps} type={type} value={value} />
          {icon && <Icon {...iconProps} />}
        </div>
        {!isValid && this._renderErr()}
      </div>
    );
  }
}

// Pass Types of icons options
TextInput.Icon = Icon.Type;

TextInput.defaultProps = {
  type: "name",
  errorMsg: "",
  validator: () => {
    return { valid: true };
  },
  onFinish: () => {},
  required: false,
  icon: false,
  iconProps: {
    type: null,
    onClick: null
  }
};

TextInput.propTypes = {
  type: PropTypes.string,
  iconType: PropTypes.oneOf(Object.values(Icon.Type)),
  validator: PropTypes.func,
  onFinish: PropTypes.func,
  required: PropTypes.bool,
  errorMsg: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.bool
  //iconProps: PropTypes.shape({ ...Icon.propTypes })
};

export default TextInput;
