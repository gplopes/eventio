import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { Page, Section } from "../../src/layouts";

import { validateCapacity, validateDate } from "../../src/utils/validates";
import { withConsumer } from "../../src/store";

import CloseButton from "../../src/components/Header/components/Buttons";
import Button from "../../src/components/Button";
import TextInput from "../../src/components/TextInput";

// Page Config
const pageProps = {
  name: "CreateEvent",
  className: "centered-content",
  fullScreen: true,
  headerGap: false
};

class CreateEvent extends Component {
  static headerProps = {
    hideAccount: true,
    rightComponent: <CloseButton />
  };
  constructor() {
    super();

    this.state = {
      isSubmitting: false,
      buttonName: "Create new event"
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
      this.setState({ isSubmitting: true });
      const date = new Date(this.date.getVal());
      const time = this.time.getVal().split(":"); // HH:MM

      date.setHours(time[0], time[1]);
      const dateISO = date.toISOString();

      const newEvent = {
        title: this.title.getVal(),
        description: this.desc.getVal(),
        startsAt: dateISO,
        capacity: this.capacity.getVal()
      };

      this.props.actions.createEvent(newEvent).then(({ event }) => {
        this.setState({ buttonName: "Event created :)" });
        this.redirect = setTimeout(() => {
          Router.push({ pathname: "/event", query: { id: event.id }});
        }, 2000);
      });
    }
  };
  render() {
    const { isSubmitting, buttonName } = this.state;

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
              {buttonName}
            </Button>
          </div>
        </Section>
      </Page>
    );
  }
}

CreateEvent.propTypes = {
  actions: PropTypes.shape({
    createEvent: PropTypes.func.isRequired
  }).isRequired
};

export default withConsumer(CreateEvent);
