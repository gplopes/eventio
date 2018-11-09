import Document, { Main, NextScript } from "next/document";
import Meta from "../src/layouts/Meta";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Meta />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
