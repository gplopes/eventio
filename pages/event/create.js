import React, { Component } from "react";
import { Page, Section } from "../../src/layouts";

import CloseButton from "../../src/components/Header/components/CloseButon";
import Button from "../../src/components/Button";
import TextInput from "../../src/components/TextInput";

// Helpers
const validateCapacity = value => {
  return {
    valid: value > 1,
    error: "You can be all alone on the event"
  };
};

const validateDate = value => {
  const now = new Date();
  const inputDate = new Date(value);
  return {
    valid: inputDate < now,
    error: "We haven't invented time machine yet :)"
  };
};

// Page Config
const pageProps = {
  name: "Create Event"
};

export default class CreateEvent extends Component {
  static headerProps = {
    hideAccount: true,
    rightComponent: <CloseButton />
  };
  constructor() {
    super();

    this.state = {
      isSubmitting: false
    };

    this.titleProps = {
      ref: node => (this.title = node),
      label: "Title",
      required: true
    };

    this.descProps = {
      ref: node => (this.desc = node),
      label: "Description",
      required: true
    };

    this.dateProps = {
      ref: node => (this.date = node),
      label: "Date",
      type: "date",
      required: true,
      validator: validateDate
    };

    this.timeProps = {
      ref: node => (this.time = node),
      label: "Time",
      type: "time",
      required: true
    };

    this.capacityProps = {
      ref: node => (this.capacity = node),
      label: "Capacity",
      type: "number",
      required: true,
      validator: validateCapacity
    };
  }
  submitHandler = () => {
    const isTitleValid = this.title.isValid();
    const isDescValid = this.desc.isValid();
    const isDateValid = this.date.isValid();
    const isTimeValid = this.time.isValid();
    const isCapacityValid = this.capacity.isValid();

    if (
      isTitleValid &&
      isDescValid &&
      isDateValid &&
      isTimeValid &&
      isCapacityValid
    ) {
      console.log("All are valid");
    }

    const eventPayload = {
      title: this.title.getVal(),
      desc: this.desc.getVal(),
      date: this.time.getVal(),
      time: this.time.getVal(),
      capacity: this.capacity.getVal()
    };
    //console.log("PAYLOAD", eventPayload);
  };
  render() {
    const { isSubmitting } = this.state;

    return (
      <Page {...pageProps}>
        <Section centeredContent>
          <div className="card align-center form-wrapper">
            <h4>Create new event</h4>
            <p className="text-light">Enter details below.</p>
            <TextInput {...this.titleProps} />
            <TextInput {...this.descProps} />
            <TextInput {...this.dateProps} />
            <TextInput {...this.timeProps} />
            <TextInput {...this.capacityProps} />

            <Button onClick={this.submitHandler} loading={isSubmitting}>
              Create new event
            </Button>
          </div>
        </Section>
      </Page>
    );
  }
}
