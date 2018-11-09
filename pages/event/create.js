import React, { PureComponent } from "react";
import Page from "../../src/layouts/Page";

import CloseButton from "../../src/components/Header/components/CloseButon";
import Button from "../../src/components/Button/Button";
import TextInput from "../../src/components/TextInput/TextInput";

export default class CreateEvent extends PureComponent {
  constructor() {
    super();

    this.state = {
      isSubmitting: false
    };

    this.titleProps = {
      ref: node => (this.title = node),
      label: "Title"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    this.descProps = {
      ref: node => (this.desc = node),
      label: "Description"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    this.dateProps = {
      ref: node => (this.date = node),
      label: "Date",
      type: "date"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    this.timeProps = {
      ref: node => (this.time = node),
      label: "Time",
      type: "time"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };

    this.capacityProps = {
      ref: node => (this.capacity = node),
      label: "Capacity",
      type: "number"
      //errorMsg: "Wrong email address",
      //validator: validateEmail
    };
  }
  handleSubmit = () => {
    if (
      this.title.isValid &&
      this.desc.isValid &&
      this.date.isValid &&
      this.time.isValid &&
      this.capacity.isValid
    ) {
      console.log("It is valid");
    }

    const eventPayload = {
      title: this.title.getVal(),
      desc: this.desc.getVal(),
      date: this.time.getVal(),
      time: this.time.getVal(),
      capacity: this.capacity.getVal()
    };
    console.log("PAYLOAD", eventPayload);
  
  };
  render() {
    const { isSubmitting } = this.state;

    return (
      <Page headerGap>
        <section>
          <div className="container centered-content">
            <div className="card align-center" style={{ width: 500 }}>
              <h4>Create new event</h4>
              <p className="text-light">Enter details below.</p>
              <TextInput {...this.titleProps} />
              <TextInput {...this.descProps} />
              <TextInput {...this.dateProps} />
              <TextInput {...this.timeProps} />
              <TextInput {...this.capacityProps} />

              <Button onClick={this.handleSubmit} loading={isSubmitting}>
                Create new event
              </Button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

CreateEvent.getInitialProps = () => {
  return {
    headerProps: {
      hideAccount: true,
      rightItem: <CloseButton />
    }
  };
};
