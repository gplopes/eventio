import App, { Container } from "next/app";
import React from "react";

import { Provider } from "../src/store";
import Header from "../src/components/Header/Header";

class Eventio extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    //console.log('pageProps', pageProps);
    return (
      <Provider>
        <Container>
          <Header {...pageProps.headerProps} />
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default Eventio;
