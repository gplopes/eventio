import React from "react";
import Head from "next/head";
import classNames from "classnames";

import "../styles/main.scss";



const Page = ({ children, title, className, type }) => {
  return (
    <main className={classNames(className, type)}>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ paddingTop: 100 }} />
      {children}
    </main>
  );
};


Page.Type = {
  light: "layout-light",
  white: "layout-white"
};

Page.defaultProps = {
  type: Page.Type.white,
  title: "Page Title"
};

export default Page;
