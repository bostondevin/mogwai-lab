import { NextSeo } from "next-seo";
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

function Home({ store, user }) {
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
      <Editor store={store} user={user} />
    </ThemeProvider>
  );
}

export default Home;
