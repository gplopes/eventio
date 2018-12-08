
import React, { Component, ReactNode } from "react";
import Router from "next/router";
import classNames from "classnames";

import Page from "../layouts/Page";

import { userApi, getErrorMsg } from "../api";
import { withConsumer } from "../store";

import Banner from "../components/Banner";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { NonAuth } from "../components/Header/components/Messages";

// Utils
import { validateEmail, TypeValidation } from "../utils/validates";

// Page Config
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
  actions: {
    setUser(user: any): void
  }
};

type State = {
  isSubmitting: boolean,
  hasError: boolean,
  pwdType: string,
  errorMsg?: string
};

//////////////////////////////////////////// UI
class Login extends Component<Props, State> {
  password: any; //ReactNode;
  email: any; //ReactNode;
  emailProps: {
    ref: (node: ReactNode) => ReactNode,
    label: string,
    validator(val: string): TypeValidation
  }


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
      ref: (node: ReactNode) => (this.password = node),
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
            <h4>Sign in to Eventio v2.</h4>
            <p className="text-light">Enter your details below.</p>
            {this.renderError()}
            <form className="form-inputs">
              <TextInput {...this.emailProps} />
              <TextInput {...passwordProps} />
              <NonAuth />
              <Button onClick={this.submitHandler} loading={isSubmitting}>
                Sign Inx
              </Button>
            </form>
          </div>
        </section>
      </Page>
    );
  }
}


export default withConsumer(Login);
