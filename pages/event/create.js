import React, { PureComponent } from "react";
import Page from "../../src/layouts/Page";

import CloseButton from "../../src/components/Header/components/CloseButon";
import Button from "../../src/components/Button/Button";
import TextInput from "../../src/components/TextInput/TextInput";

export default class CreateEvent extends PureComponent {
  static async getInitialProps() {
    return {
      headerProps: { rightItem: <CloseButton /> }
    };
  }
  state = { 
    isSubmitting: false,
  }
  handleSubmit = () => {

  };
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
      type: "date",
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
      <Page>
        <section>
          <div className="container centered-content">
            <div className="card" style={{width: 500}}>
              <h4>Create new event</h4>
              <p className="text-light">Enter details below.</p>
              <TextInput {...titleProps} />
              <TextInput {...descProps} />
              <TextInput {...dateProps} />
              <TextInput {...timeProps} />
              <TextInput {...capacityProps} />

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
