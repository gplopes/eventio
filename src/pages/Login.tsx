import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { setUser } from "../store/userStore";

import urls from "../routes/urls";
import Page from "../layouts/Page";
import { OnlyMobile } from "../layouts/Responsive";

import userApi from "../services/auth/authApi";

import Banner from "../components/Banner/Banner";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";
import { NonAuth } from "../components/Header/components/Messages";

// Utils
import { validateEmail } from "../components/Form/utils/validates";

///////////////////////////////////////////////////// Page Config

const pageProps = {
  name: "Login",
  title: "Welcome back trooper",
  fullScreen: true,
  topGap: false
};

///////////////////////////////////////// Props & State

type Props = {
  setUser(user: object): void;
};

type State = {
  isSubmitting: boolean;
  pwdType: string;
  errorMsg: string | null;
};

type AuthType = {
  email: string;
  password: string;
};

//////////////////////////////////////////// UI

class Login extends Component<Props, State> {
  static headerProps = {
    lightLogo: true,
    rightComponent: <NonAuth />
  };

  readonly state = {
    isSubmitting: false,
    pwdType: "password",
    errorMsg: null
  };

  emailProps = {
    label: "Email",
    value: "thor@strv.com", // temp
    validator: validateEmail
  };

  // Toggle
  togglePwdInputType = () => {
    const pwdType = this.state.pwdType === "password" ? "text" : "password";
    this.setState({ pwdType });
  };

  authHandler = ({ email, password }: AuthType) => {
    this.setState({ isSubmitting: true });

    userApi
      .login(email, password)
      .then(user => {
        this.props.setUser(user);
        Router.replace(urls.HOME);
      })
      .catch((error: string) => {
        this.setState({
          isSubmitting: false,
          errorMsg: error
        });
      });
  };

  render() {
    const { isSubmitting, pwdType } = this.state;

    // Input: Password Props (dynamic changes)
    const passwordProps = {
      type: pwdType,
      label: "Password",
      value: "missMyBroth3r", // temp
      iconProps: {
        className: `${this.state.pwdType === "text" && "active"}`,
        type: Form.Input.Icon.eye,
        onClick: this.togglePwdInputType
      }
    };
    return (
      <Page {...pageProps}>
        <Banner />
        <section className="centered-content">
          <div className="form-wrapper">
            <h1>Sign in to Eventio 2</h1>
            <p className="text-light">Enter your details below.</p>
            <Form onSubmit={this.authHandler}>
              <Form.Input {...this.emailProps} />
              <Form.Input {...passwordProps} />
              <OnlyMobile><NonAuth /></OnlyMobile>
              <Button loading={isSubmitting} type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </section>
      </Page>
    );
  }
}

//////////////////////////////////// Connect

export default connect(
  null,
  { setUser }
)(Login);
