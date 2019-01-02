import React, { PureComponent, ReactElement, Fragment } from "react";
import TextInput from "./TextInput";

type Props = {
  onSubmit(values: any): any;
  errorMsg?: string | null;
};

////////////////////////////////////////////////////// UI

export default class Form extends PureComponent<Props> {
  static Input = TextInput;
  inputs: ReactElement<TextInput>[] = [];

  submitHandler = (evt: any) => {
    evt.preventDefault();
    let canSubmit = true;
    let values = {};

    this.inputs.forEach(child => {
      // @ts-ignore
      const input = child.val();
      canSubmit = !canSubmit ? false : input.valid;
      delete input.valid;
      values = Object.assign(values, input);
    });

    if (canSubmit) {
      console.log("Submit", canSubmit, values);
      this.props.onSubmit(values);
    } else {
      // Handle Error
    }
  };

  // Renders
  renderError() {
    const { errorMsg } = this.props;
    return errorMsg && <p className="text-alert">{errorMsg}</p>;
  }

  render() {
    const { children } = this.props;
    const onRef = (node: ReactElement<TextInput>) => this.inputs.push(node);
    return (
      <Fragment>
        {this.renderError()}
        <form className="form-inputs" onSubmit={this.submitHandler}>
          {React.Children.map(children, (child: any) => {
            if (child.type === TextInput)
              return React.cloneElement(child, { ref: onRef });
            return child;
          })}
        </form>
      </Fragment>
    );
  }
}
