import { NextSeo } from "next-seo";
import { Builder } from "../components/Builder/Builder";
import "reactjs-popup/dist/index.css";

function Home({ store }) {
  return (
    <>
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
    </>
  );
}

export default Home;
