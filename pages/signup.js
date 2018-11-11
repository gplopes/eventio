import React, { PureComponent } from "react";
import Page from "../src/layouts/Page";

import Banner from "../src/components/Banner";
import TextInput from "../src/components/TextInput";
import Button from "../src/components/Button";

import { HaveAccount } from "../src/components/Header";
import { validateEmail, validatePassword } from "../src/utils/validates";

// Page Config
const pageProps = {
  name: "SignUp",
  title: "Create your own account for free",
  fullScreen: true,
  headerGap: false
};

class SignUp extends PureComponent {
  static headerProps = {
    lightLogo: true,
    rightComponent: <HaveAccount />
  };
  constructor() {
    super();
    this.state = {
      isSubmitting: false,
      hasError: false
    };

    this.firstNameProps = {
      ref: node => (this.firstName = node),
      label: "First name",
      required: true
    };

    this.lastNameProps = {
      ref: node => (this.lastName = node),
      label: "Last name",
      required: true
    };

    this.emailProps = {
      ref: node => (this.email = node),
      label: "Email",
      validator: validateEmail,
      required: true
    };

    this.passwordProps = {
      ref: node => (this.password = node),
      label: "Password",
      type: "password",
      required: true
    };

    this.passwordRepeatProps = {
      ...this.passwordProps,
      ref: node => (this.repeatPassword = node),
      label: "Repeat Password",
      validator: this.checkRepeatPassword
    };
  }
  checkPassword = password => {
    const repeatPassword = this.repeatPassword.getVal();
    return validatePassword(password, repeatPassword);
  };
  checkRepeatPassword = repeatPassword => {
    const password = this.password.getVal();
    return validatePassword(password, repeatPassword);
  };
  submitHandler = () => {
    // Checker
    const isEmailValid = this.email.isValid();
    const isPasswordValid = this.password.isValid();
    const isRepeatPasswordValid = this.repeatPassword.isValid();
    const isFirstNameValid = this.firstName.isValid();
    const isLastNameValid = this.lastName.isValid();

    if (
      isEmailValid &&
      isPasswordValid &&
      isRepeatPasswordValid &&
      isFirstNameValid &&
      isLastNameValid
    ) {
      this.setState({ isSubmitting: true, hasError: false });
    }
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
      <Page {...pageProps}>
        <Banner />
        <section className="centered-content">
          <div className="form-wrapper">
            <h4>Get started absolutely free.</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <div className="SignIn-form">
              <TextInput {...this.firstNameProps} />
              <TextInput {...this.lastNameProps} />
              <TextInput {...this.emailProps} />
              <TextInput {...this.passwordProps} />
              <TextInput {...this.passwordRepeatProps} />
              <Button onClick={this.submitHandler} loading={isSubmitting}>
                Sign Up
              </Button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default SignUp;
