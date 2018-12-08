import Document, { Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import Meta from "../src/layouts/Meta";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
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
