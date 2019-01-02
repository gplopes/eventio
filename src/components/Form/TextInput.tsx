import React, { PureComponent } from "react";

import Icon from "../Icon/Icon";

import { InputField, InputWrap, Label, Input, Alert } from "./styles";

///////////////////////////////////////////////////////////////////// Types

type Props = {
  value?: string;
  type?: string;
  validator?: (
    val: string
  ) => {
    valid: boolean;
    error: string;
  };
  required?: boolean;
  errorMsg?: string;
  label: string;
  iconProps?: {
    type: Icon.Type;
    onClick(): void;
  };
};

type State = {
  errorMsg: string;
  isValid: boolean;
  isFocus: boolean;
  hasContent: boolean;
};

const defaultProps: Props = {
  type: "name",
  label: "Label",
  errorMsg: "",
  required: false
};

/////////////////////////////////////////////////////////////// UI

class TextInput extends PureComponent<Props, State> {
  input: any;
  static defaultProps = defaultProps;
  static Icon = Icon.Type;

  static getDerivedStateFromProps(props: Props) {
    return {
      hasContent: props.value
    };
  }

  state = {
    errorMsg: "",
    isValid: true,
    isFocus: false,
    hasContent: false
  };

  // Validation
  validationChecker = (value: string) => {
    const { required, label, validator } = this.props;
    let isValid: boolean = true;
    let errorMsg: null | string = null;

    const hasContent = value.length > 0;

    if (validator) {
      const { valid, error } = validator(value);
      isValid = valid;
      errorMsg = error;
    } else {
      errorMsg = `${label} has to be filled up`;
    }

    // Update Error
    errorMsg && this.setState({ errorMsg });

    // Return
    if (required) return isValid && hasContent;
    else if (!hasContent) return true;
    else return isValid;
  };

  // Handlers:
  focusHandler = () => {
    this.setState({ hasContent: true, isFocus: true, isValid: true });
  };

  blurHandler = () => {
    const { value } = this.input;

    this.setState({
      hasContent: value.length > 0,
      isValid: this.validationChecker(value),
      isFocus: false
    });
  };

  // Public Function
  public val = (): any => {
    const { label } = this.props;
    const { value } = this.input;
    const isValid = this.validationChecker(value);
    return { [label.toLowerCase()]: value, valid: isValid };
  };

  render() {
    const { hasContent, isFocus, isValid, errorMsg } = this.state;
    const { type, label, iconProps, value, required } = this.props;
    const star = required ? "*" : "";

    return (
      <InputWrap>
        <InputField invalid={!isValid} focus={isFocus}>
          <Label open={hasContent}>
            {label} {star}
          </Label>
          <Input
            type={type}
            name={label}
            ref={(node: any) => (this.input = node)}
            defaultValue={value}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
          />
          {iconProps && <Icon {...iconProps} />}
        </InputField>
        {!isValid && <Alert>{errorMsg}</Alert>}
      </InputWrap>
    );
  }
}

export default TextInput;
