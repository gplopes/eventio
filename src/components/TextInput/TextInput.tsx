import React, { PureComponent } from "react";
import classNames from "classnames";

import Icon from "../Icon";

import "./TextInput.styles.scss";


//////////////////////////////////////////////// Types

type Props = {
  type?: string;
  validator?: (
    val: string
  ) => {
    valid: boolean;
    error: string;
  };
  onFinish?: (response: { value: string; isValid: boolean }) => void;
  required?: boolean;
  errorMsg?: string;
  label: string;
  icon?: boolean;
  iconProps?: {
    type: Icon.Type;
    onClick(): void;
  };
};

type State = {
  value: string;
  errorMsg: string;
  isValid: boolean;
  isFocus: boolean;
  hasContent: boolean;
};

const defaultProps: Props = {
  type: "name",
  label: "Label",
  errorMsg: "",
  onFinish: () => {},
  required: false,
  icon: false
};

//////////////////////////////////////////////// Helper

const isDateOrTime = (type: string) => {
  return type === "date" || type === "time";
};
const requiredErrorMsg = (labelName: string) =>
  `${labelName} has to be filled up`;

/////////////////////////////////////////////////////////////// UI

class TextInput extends PureComponent<Props, State> {
  inputProps: {
    className: string;
    onBlur(): void;
    onFocus(): void;
    onChange(evt: any): void;
  };

  static defaultProps = defaultProps;
  static Icon = Icon.Type;

  static getDerivedStateFromProps(props: Props) {
    if (typeof props.type === "string" && isDateOrTime(props.type)) {
      return {
        hasContent: true
      };
    }
    return {};
  }

  constructor(props: Props) {
    super(props);

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
    const { required, label, validator } = this.props;
    const { value } = this.state;
    const _validator = validator ? validator(value) : { valid: true, error: "" };
    const hasContent = value.length > 0;

    // Update Error Msg According to Validation
    const errorMsgType = !_validator.valid
      ? _validator.error
      : requiredErrorMsg(label);
    this.setState({ errorMsg: errorMsgType });

    // Return Status
    if (required) return _validator.valid && hasContent;
    else if (!hasContent) return true;
    else return _validator.valid;
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
    this.props.onFinish && this.props.onFinish({ value, isValid });
  };
  changeHandler = (evt: any) => {
    this.setState({ value: evt.target.value });
  };

  // Public Functions
  public getVal = () => this.state.value;
  public isValid = () => {
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

export default TextInput;
