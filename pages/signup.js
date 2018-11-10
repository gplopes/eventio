import React, { PureComponent } from "react";
import Page from "../src/layouts/Page";

import Banner from "../src/components/Banner/Banner";
import TextInput from "../src/components/TextInput/TextInput";
import Button from "../src/components/Button/Button";

import validateEmail from "../src/utils/validateEmail";
import validatePassword from "../src/utils/validatePassword";

// Page Config
const pageProps = {
  name: "SignUp",
  title: "Eventio | Create your own account for free",
  fullScreen: true,
  headerGap: false
};


class SignUp extends PureComponent {
  static headerProps = {
    lightLogo: true
  };
  constructor() {
    super();
    this.state = {
      isSubmitting: false,
      hasError: false
    };

    this.firstNameProps = {
      ref: node => (this.firstName = node),
      label: "First name"
    };

    this.lastNameProps = {
      ref: node => (this.lastName = node),
      label: "Last name"
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
      //validator: this.checkPassword,
      iconType: TextInput.Icon.eye
    };

    this.passwordRepeatProps = {
      ...this.passwordProps,
      ref: node => (this.repeatPassword = node),
      validator: this.checkRepeatPassword,
      errorMsg: "Passwords are not matching",
      label: "Repeat Password",
      type: "password"
    };
  }
  checkPassword = password => {
    const repeatPassword = this.repeatPassword.getVal().value;
    return validatePassword(password, repeatPassword);
  };
  checkRepeatPassword = repeatPassword => {
    const password = this.password.getVal().value;
    return validatePassword(password, repeatPassword);
  };
  handleSubmit = () => {
    // Checker
    const email = this.email.getVal();
    const password = this.password.getVal().value;
    const repeatPassword = this.repeatPassword.getVal().value;

    // No check
    const name = this.name.getVal().value;
    const lastName = this.lastName.getVal().value;

    if (!email.isValid || repeatPassword !== password) {
      this.setState({ hasError: true });
      return false;
    }

    this.setState({ isSubmitting: true, hasError: true });
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
            <div className="SignIn-form" style={{ marginTop: 50 }}>
              <TextInput {...this.firstNameProps} />
              <TextInput {...this.lastNameProps} />
              <TextInput {...this.emailProps} />
              <TextInput {...this.passwordProps} />
              <TextInput {...this.passwordRepeatProps} />
              <Button onClick={this.handleSubmit} loading={isSubmitting}>
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
