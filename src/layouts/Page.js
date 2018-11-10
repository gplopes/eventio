import React from "react";
import Head from "next/head";
import classNames from "classnames";

import "../styles/main.scss";

const Page = ({ children, name, title, className, type, headerGap, fullScreen }) => {
  const mainClasses = classNames(className, type, {
    "header-gap": headerGap,
    "full-screen": fullScreen
  });
  return (
    <main className={mainClasses} page={name}>
      <Head>
        <title>{title}</title>
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


Page.defaultProps = {
  headerGap: true,
  fullScreen: false,
  //type: Page.Type.white,
  title: "Eventio",
  openGraph: {
    type: "website",
    locale: "en",
    //url: "https://www.garymeehan.ie",
    title: "Next.js Seo",
    description: "SEO made easy for Next.js projects",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    //site_name: "GaryMeehan.ie",
    imageWidth: 1200,
    imageHeight: 1200
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image"
  }
};

export default Page;
