import { NextSeo } from "next-seo";
import { Builder } from "../components/Builder/Builder";
import "reactjs-popup/dist/index.css";

function Home({ store }) {
  return (
    <>
      <NextSeo
        title="Mogwai Labs"
        description="Mogwai Labs Builder App"
        canonical="http://mogwai-labs.com/"
        twitter={{
          site: "mogwai-labs.com",
          cardType: "summary_large_image",
        }}
      />
      <Builder store={store} />
    </>
  );
}

export default Home;
