import React, { PureComponent } from "react";

import Button from "../Button";
import TextInput from "../TextInput";

export default class EventForm extends PureComponent {
  state = {
    isSubmitting: false
  };
  handleSubmit = () => {};
  render() {
    const { isSubmitting } = this.state;
    const titleProps = {
      ref: node => (this.title = node),
      label: "Title"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    const descProps = {
      ref: node => (this.desc = node),
      label: "Description"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    const dateProps = {
      ref: node => (this.desc = node),
      label: "Date",
      type: "date"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    const timeProps = {
      ref: node => (this.desc = node),
      label: "Time",
      type: "time"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    const capacityProps = {
      ref: node => (this.desc = node),
      label: "Capacity",
      type: "number"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    return (
      <div className="card">
        <TextInput {...titleProps} />
        <TextInput {...descProps} />
        <TextInput {...dateProps} />
        <TextInput {...timeProps} />
        <TextInput {...capacityProps} />
      </div>
    );
  }
}
