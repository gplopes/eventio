import React, { PureComponent } from "react";
import Router from "next/router";
import Page from "../src/layouts/Page";

import { authApi, getErrorMsg } from "../src/api";
import { withConsumer } from "../src/store";

import Banner from "../src/components/Banner";
import TextInput from "../src/components/TextInput";
import Button from "../src/components/Button";
import { NonAuth } from "../src/components/Header";

// Utils
import validateEmail from "../src/utils/validateEmail";

const PAGE_TITLE = "Eventio | STRV";
const INVALID_INPUTS =
  "Oops! That email and password combination is not valid.";

class SignIn extends PureComponent {
  constructor() {
    super();

    this.state = {
      isSubmitting: false,
      hasError: false,
      errorMsg: ""
    };

    // Input: Email Props
    this.emailProps = {
      ref: node => (this.email = node),
      label: "Email",
      errorMsg: "Wrong email address",
      validator: validateEmail
    };

    // Input: Password Props
    this.passwordProps = {
      ref: node => (this.password = node),
      label: "Password",
      type: "password",
      icon: true,
      iconType: TextInput.Icon.eye
    };
  }

  handleSubmit = () => {
    // Input Validation Check
    if (!this.email.isValid() || !this.password.isValid()) {
      this.setState({ hasError: true, errorMsg: INVALID_INPUTS });
      return false;
    }

    //
    this.setState({ isSubmitting: true, hasError: false });
    this.handleAuth();
  };
  handleAuth = () => {
    const email = this.email.getVal();
    const password = this.password.getVal();

    authApi
      .login(email, password)
      .then(data => {
        this.props.actions.setUser(data.user);
        Router.replace("/");
      })
      .catch(error => {
        console.log("ERROR???", error);
        this.setState({
          isSubmitting: false,
          hasError: true,
          errorMsg: getErrorMsg(error)
        });
      });
  };

  renderError() {
    const { hasError, errorMsg } = this.state;
    return hasError && <p className="text-alert">{errorMsg}</p>;
  }
  render() {
    const { isSubmitting } = this.state;

    return (
      <Page className="SignIn flex" title={PAGE_TITLE} fullScreen>
        <Banner />
        <section className="centered-content">
          <div className="form-wrapper">
            <h4>Sign in to Eventio.</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <div className="SignIn-form" style={{ marginTop: 50 }}>
              <TextInput {...this.emailProps} />
              <TextInput {...this.passwordProps} />
              <NonAuth />
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

SignIn.getInitialProps = () => {
  return {
    headerProps: {
      lightLogo: true,
      rightItem: <NonAuth />
    }
  };
};

export default withConsumer(SignIn);
