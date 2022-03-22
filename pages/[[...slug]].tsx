import { NextSeo } from "next-seo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Builder } from "../components/Builder/Builder";
import "reactjs-popup/dist/index.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

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
