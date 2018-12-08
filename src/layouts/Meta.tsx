import { Head } from "next/document";
import { ReactNode } from "react";

const Meta = ({ children }: { children: ReactNode }) => (
  <Head>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <link rel="icon" href="/static/favicon.ico?v=1.1" />
    <link
      href="https://fonts.googleapis.com/css?family=Hind:400,600"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display"
      rel="stylesheet"
    />
    {children}
  </Head>
);

export default Meta;
