import { ReactElement } from "react";
import Document, { Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import Meta from "../src/layouts/Meta";

//////////////////////////////// Types

type Props = {
  styleTags: ReactElement<{}>[]
}

///////////////////////////////////// UI

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styleTags };
  }

  render() {
    return (
      <html>
        <Meta>{this.props.styleTags}</Meta>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
