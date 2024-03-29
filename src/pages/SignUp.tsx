import React, { PureComponent, ReactNode } from "react";
import Page from "../layouts/Page";

import Banner from "../components/Banner/Banner";
import TextInput from "../components/TextInput";
import Button from "../components/Button/Button";

import { HaveAccount } from "../components/Header/components/Messages";
import { validateEmail, validatePassword, TypeValidation } from "../components/TextInput/utils/validates";

/////////////////////////////// Page Config

const pageProps = {
  name: "SignUp",
  title: "Create your own account for free",
  fullScreen: true,
  headerGap: false
};

///////////////// Type

type InputProps = {
  ref: (node: ReactNode) => ReactNode,
  label: string,
  type?: string;
  required?: boolean;
  validator?: (val: string) => TypeValidation
};

type State = {
  isSubmitting: boolean;
  hasError: boolean;
};

////////////////////////////////////// UI

class SignUp extends PureComponent<{}, State> {
  firstName: any;// ReactNode;
  lastName: any;// ReactNode;
  email: any;//ReactNode;
  password: any;//ReactNode;
  repeatPassword: any;//ReactNode;

  firstNameProps: InputProps;
  lastNameProps: InputProps;
  emailProps: InputProps;
  passwordProps: InputProps;
  passwordRepeatProps: InputProps;


  static headerProps = {
    lightLogo: true,
    rightComponent: <HaveAccount />
  };


  constructor(props: any) {
    super(props);
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
  checkPassword = (password: string) => {
    const repeatPassword = this.repeatPassword.getVal();
    return validatePassword(password, repeatPassword);
  };
  checkRepeatPassword = (repeatPassword: string) => {
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
