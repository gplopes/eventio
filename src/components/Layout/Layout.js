import React, { Fragment } from "react";
import Head from "next/head";
import classNames from "classnames";

import "../../styles/main.scss";

import Header from "../Header/Header";

const Layout = ({ children, title, className, type }) => {
  return (
    <main className={classNames(className, type)}>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Hind:400,600"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
    </main>
  );
};

Layout.Type = {
  light: "layout-light",
  white: "layout-white"
};

Layout.defaultProps = {
  type: Layout.Type.white,
  title: "Page Title"
};

export default Layout;
