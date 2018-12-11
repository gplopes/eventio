import App, { Container } from "next/app";
import React from "react";

import AuthService from "../src/services/auth";
import Eventio from "../src/containers/App";

type AppType = {
  Component: any;
  router: any;
  ctx: any;
};
class AppContainer extends App {
  static async getInitialProps(params: AppType) {
    const { Component, ctx } = params;
    let pageProps = {};

    const auth = new AuthService(ctx);
    auth.check();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    return (
      <Container>
        <Eventio {...this.props} />
      </Container>
    );
  }
}

export default AppContainer;
