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
      <Html className="h-full w-full">
        <Head>
          {(this.props as any).styleTags}
          <script
            src="https://kit.fontawesome.com/2104ea5de2.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body className="h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
