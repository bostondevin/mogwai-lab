import React from "react";
import { NextSeo } from "next-seo";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Editor from "../components/Builder/Editor";

const theme = createTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="Builder App"
        description="An application for building drag-n-drop."
        canonical="http://builder.org/"
        twitter={{
          site: "craft.js.org",
          cardType: "summary_large_image",
        }}
      />
      <Editor />
    </ThemeProvider>
  );
}

export default Home;
