import App, { Container } from "next/app";
import React from "react";

import isAuth from "../src/auth/isAuth";
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

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const user = await isAuth(ctx);
    return { pageProps, user };
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
