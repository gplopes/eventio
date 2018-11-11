import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import classNames from "classnames";
import Page from "../src/layouts/Page";

import { userApi, getErrorMsg } from "../src/api";
import { withConsumer } from "../src/store";

import Banner from "../src/components/Banner";
import TextInput from "../src/components/TextInput";
import Button from "../src/components/Button";
import { NonAuth } from "../src/components/Header";

// Utils
import { validateEmail } from "../src/utils/validates";

// Page Config
const pageProps = {
  name: "Login",
  title: "Welcome back trooper",
  fullScreen: true,
  headerGap: false
};

const INVALID_INPUTS =
  "Oops! That email and password combination is not valid.";

class Login extends Component {
  // Global Header
  static headerProps = {
    lightLogo: true,
    rightComponent: <NonAuth />
  };
  constructor() {
    super();

    this.state = {
      isSubmitting: false,
      hasError: false,
      pwdType: "password",
      errorMsg: ""
    };

    // Input: Email Props
    this.emailProps = {
      ref: node => (this.email = node),
      label: "Email",
      validator: validateEmail
    };
  }

  // Toggle
  togglePwdInputType = () => {
    const pwdType = this.state.pwdType === "password" ? "text" : "password";
    this.setState({ pwdType });
  };
  // Handlers
  submitHandler = () => {
    // Input Validation Check
    if (!this.email.isValid() || !this.password.isValid()) {
      this.setState({ hasError: true, errorMsg: INVALID_INPUTS });
      return false;
    }

    this.setState({ isSubmitting: true, hasError: false });
    this.authHandler();
  };

  authHandler = () => {
    const email = this.email.getVal();
    const password = this.password.getVal();

    userApi
      .login(email, password)
      .then(user => {
        this.props.actions.setUser(user);
        Router.replace("/dashboard");
      })
      .catch(error => {
        this.setState({
          isSubmitting: false,
          hasError: true,
          errorMsg: getErrorMsg(error)
        });
      });
  };

  // Renders
  renderError() {
    const { hasError, errorMsg } = this.state;
    return hasError && <p className="text-alert">{errorMsg}</p>;
  }
  render() {
    const { isSubmitting, pwdType } = this.state;

    // Input: Password Props (dynamic changes)
    const passwordProps = {
      ref: node => (this.password = node),
      type: pwdType,
      label: "Password",
      icon: true,
      iconProps: {
        className: classNames({ active: this.state.pwdType === "text" }),
        type: TextInput.Icon.eye,
        onClick: this.togglePwdInputType
      }
    };
    return (
      <Page {...pageProps}>
        <Banner />
        <section className="centered-content">
          <div className="form-wrapper">
            <h4>Sign in to Eventio.</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <div className="form-inputs">
              <TextInput {...this.emailProps} />
              <TextInput {...passwordProps} />
              <NonAuth />
              <Button onClick={this.submitHandler} loading={isSubmitting}>
                Sign In
              </Button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.shape({
    setUser: PropTypes.func.isRequired
  }).isRequired
};

export default withConsumer(Login);
