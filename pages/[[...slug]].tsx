import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import Gun from "gun/gun";
import { nanoid } from "nanoid";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Editor } from "../components/Builder/Editor";

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

const getPeers = () => {
  if (process.env.NODE_ENV === "development") {
    return ["http://localhost:8765/gun"];
  } else {
    return ["http://localhost:8765/gun"];
  }
};

const gun = Gun({
  peers: getPeers(),
  uuid: () => {
    const newId = nanoid(11);
    return newId;
  },
});

function Home() {
  useEffect(() => {
    console.log(gun);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="Mogwai Lab"
        description="An application for building things of all variety."
        canonical="https://mogwai-labs.com/"
        twitter={{
          site: "mogwai-labs.com",
          cardType: "summary_large_image",
        }}
      />
      <Editor />
    </ThemeProvider>
  );
}

export default Home;
