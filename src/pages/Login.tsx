import React, { Component, ReactNode } from "react";
import Router from "next/router";
import { connect } from 'react-redux';
import { setUser } from "../store/userStore";

import urls from '../routes/urls';
import Page from "../layouts/Page";


import userApi from "../services/auth/authApi";

import Banner from "../components/Banner/Banner";
import TextInput from "../components/TextInput";
import Button from "../components/Button/Button";
import { NonAuth } from "../components/Header/components/Messages";

// Utils
import { validateEmail, TypeValidation } from "../utils/validates";

///////////////////////////////////////////////////// Page Config

const pageProps = {
  name: "Login",
  title: "Welcome back trooper",
  fullScreen: true,
  headerGap: false
};

const INVALID_INPUTS =
  "Oops! That email and password combination is not valid.";

///////////////////////////////////////// Props & State

type Props = {
  setUser(user: object): void;
};

type State = {
  isSubmitting: boolean;
  hasError: boolean;
  pwdType: string;
  errorMsg?: string;
};

//////////////////////////////////////////// UI

class Login extends Component<Props, State> {
  password: any; //ReactNode;
  email: any; //ReactNode;
  emailProps: {
    ref: (node: ReactNode) => ReactNode;
    label: string;
    value: string;
    validator(val: string): TypeValidation;
  };

  static headerProps = {
    lightLogo: true,
    rightComponent: <NonAuth />
  };

  constructor(props: any) {
    super(props);

    this.state = {
      isSubmitting: false,
      hasError: false,
      pwdType: "password",
      errorMsg: ""
    };

    // Input: Email Props
    this.emailProps = {
      ref: (node: ReactNode) => (this.email = node),
      label: "Email",
      value: "thor@strv.com",
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
    if (!this.email) return false;
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
        this.props.setUser(user);
        Router.replace(urls.HOME);
      })
      .catch(error => {
        this.setState({
          isSubmitting: false,
          hasError: true,
          errorMsg: "" //getErrorMsg(error)
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
      ref: (node: ReactNode) => (this.password = node),
      type: pwdType,
      label: "Password",
      value: "missMyBroth3r",
      icon: true,
      iconProps: {
        className: `${this.state.pwdType === "text" && "active"}`,
        type: TextInput.Icon.eye,
        onClick: this.togglePwdInputType
      }
    };
    return (
      <Page {...pageProps}>
        <Banner />
        <section className="centered-content">
          <div className="form-wrapper">
            <h4>Sign in to Eventio v2</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <form className="form-inputs">
              <TextInput {...this.emailProps} />
              <TextInput {...passwordProps} />
              <NonAuth />
              <Button onClick={this.submitHandler} loading={isSubmitting}>
                Sign In
              </Button>
            </form>
          </div>
        </section>
      </Page>
    );
  }
}

//////////////////////////////////// Connect

const mapDispatchToProps = { setUser };

export default connect(
  null,
  mapDispatchToProps
)(Login);
