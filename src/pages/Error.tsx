import React, { PureComponent } from "react";
import Router from "next/router";
import httpStatus from "http-status";

import Page from "../layouts/Page";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";

import urls from '../routes/urls';

////////////////////////////////////////////// Types

type Props = {
  statusCode: number;
}

////////////////////////////////////////////// Page Config

const pageProps = {
  name: "Error",
  fullScreen: true,
  headerGap: false
};

//////////////////////////////////////////////// UI

export default class Error extends PureComponent<Props> {
  refreshHandler = () => {
    Router.replace(urls.HOME);
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
            <br/>
            <Button type={Button.Type.dark} onClick={this.refreshHandler}>
              Refresh
            </Button>
          </div>
        </section>
      </Page>
    );
  }
}
