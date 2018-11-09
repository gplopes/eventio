import React, { PureComponent } from "react";
import Page from "../src/layouts/Page";

import auth from "../src/api/auth";
import { withConsumer } from "../src/store";

import Banner from "../src/components/Banner";
import TextInput from "../src/components/TextInput";
import Button from "../src/components/Button";
import { NonAuth } from "../src/components/Header";

// Utils
import validateEmail from "../src/utils/validateEmail";

class SignIn extends PureComponent {
  static async getInitialProps() {
    return {
      headerProps: {
        lightLogo: true,
        rightItem: <NonAuth />
      }
    };
  }
  constructor() {
    super();

    this.state = {
      isSubmitting: false,
      hasError: false
    };

    this.emailProps = {
      ref: node => (this.email = node),
      label: "Email",
      errorMsg: "Wrong email address",
      validator: validateEmail
    };

    this.passwordProps = {
      ref: node => (this.password = node),
      label: "Password",
      type: "password",
      icon: true,
      iconType: TextInput.Icon.eye
    };
  }

  handleSubmit = () => {
    const email = this.email.getVal();
    const password = this.password.getVal();

    // Invalid
    if (!email.isValid || !password.isValid) {
      this.setState({ hasError: true });
      return false;
    }

    // Ok
    auth({ email: email.value, password: password.value }).then(res => {
      console.log("API", res);
    });
    //this.setState({ isSubmitting: true, hasError: false });
  };
  renderError() {
    const { hasError } = this.state;
    return (
      hasError && (
        <p className="text-alert">
          Oops! That email and password combination is not valid.
        </p>
      )
    );
  }
  render() {
    const { isSubmitting } = this.state;

    return (
      <Page className="SignIn flex">
        <Banner />
        <section className="centered-content">
          <div className="container" style={{ width: 530, marginTop: 45 }}>
            <h4>Sign in to Eventio.</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <div className="SignIn-form" style={{ marginTop: 50 }}>
              <TextInput {...this.emailProps} />
              <TextInput {...this.passwordProps} />
              <Button onClick={this.handleSubmit} loading={isSubmitting}>
                Sign In
              </Button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default withConsumer(SignIn);
