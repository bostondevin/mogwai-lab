import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
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
// <script src="https://cdn.tailwindcss.com"></script>
