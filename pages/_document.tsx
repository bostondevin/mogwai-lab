import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html style={{ height: "100%", width: "100%" }}>
        <Head>
          {(this.props as any).styleTags}
          <script src="https://kit.fontawesome.com/eba6bb339e.js"></script>
        </Head>
        <body style={{ height: "100%", width: "100%" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
