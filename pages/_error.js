import React, { PureComponent } from "react";
import Router from "next/router";
import httpStatus from "http-status";

import Page from "../src/layouts/Page";
import Banner from "../src/components/Banner";
import Button from "../src/components/Button";
import { NonAuth } from "../src/components/Header";

// Page Config
const pageProps = {
  name: "Error",
  fullScreen: true,
  headerGap: false
};

export default class Error extends PureComponent {
  static headerProps = {
    lightLogo: true,
    rightComponent: <NonAuth />
  };
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  refreshHandler = () => {
    Router.replace("/dashboard");
  };
  render() {
    const { statusCode } = this.props;
    const title =
      statusCode === 404
        ? "404 Error -  page not found"
        : httpStatus[statusCode] || "An unexpected error has occurred";

    return (
      <Page {...pageProps} title={title}>
        <Banner />
        <section className="trooper-bg centered-content">
          <div className="form-wrapper">
            <h4>{title}</h4>
            <p className="text-light">
              Seems like Darth Vader just hits our website and drops it down.
            </p>
            <p className="text-light">
              Please press the refresh button and everything should be fine
              again
            </p>
            <Button type={Button.Type.dark} onClick={this.refreshHandler}>
              Refresh
            </Button>
          </div>
        </section>
      </Page>
    );
  }
}
