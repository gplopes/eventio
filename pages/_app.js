import App, { Container } from "next/app";
import React from "react";

import isAuth from "../src/auth/isAuth";
import { Provider } from "../src/store";
import Header from "../src/components/Header";

class Eventio extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const user = await isAuth(ctx);
    return { pageProps, user };
  }
  componentDidMount() {
    const { user } = this.props;
    console.log("USER-->", user);
    if (user) this.provider.setUser(user);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider ref={node => (this.provider = node)}>
        <Container>
          <Header {...pageProps.headerProps} />
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default Eventio;
