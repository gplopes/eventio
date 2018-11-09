import React from "react";
import Head from "next/head";
import classNames from "classnames";

import "../styles/main.scss";

const Page = ({ children, title, className, type, headerGap, fullScreen }) => {
  const mainClasses = classNames(className, type, {
    "header-gap": headerGap,
    "full-screen": fullScreen
  });
  return (
    <main className={mainClasses}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </main>
  );
};

Page.Type = {
  light: "layout-light",
  white: "layout-white"
};

Page.defaultProps = {
  headerGap: true,
  fullScreen: false,
  type: Page.Type.white,
  title: "Page Title"
};

export default Page;
