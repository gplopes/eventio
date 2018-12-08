import React, { ReactNode } from "react";
import Head from "next/head";
import classNames from "classnames";

import "../styles/main.scss";

type Props = {
  children?: ReactNode;
  name?: string;
  title?: string;
  className?: string;
  type?: string;
  headerGap?: boolean;
  fullScreen?: boolean;
};

const defaultProps: Props = {
  headerGap: true,
  fullScreen: false,
  title: "Eventio"
};

const Page = (props: Props = defaultProps) => {
  const {
    children,
    name,
    title,
    className,
    type,
    headerGap,
    fullScreen
  } = props;

  const mainClasses = classNames(className, type, {
    "header-gap": headerGap,
    "full-screen": fullScreen
  });
  return (
    <main className={mainClasses} data-page={name}>
      <Head>
        <title>Eventio | {title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Eventio" />
        <meta property="og:url" content="www.strv.com/eventio" />
        <meta property="og:description" content="Site for events" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="www.eventio.image.com" />
      </Head>
      {children}
    </main>
  );
};

export default Page;
