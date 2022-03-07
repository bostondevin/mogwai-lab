import { NextSeo } from "next-seo";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Builder } from "../components/Builder/Builder";

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

function Home({ store }) {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="SEI Investments"
        description="SEI Investments"
        canonical="http://seic.com/"
        twitter={{
          site: "seic.com",
          cardType: "summary_large_image",
        }}
      />
      <Builder store={store} />
    </ThemeProvider>
  );
}

export default Home;
