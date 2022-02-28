import "../styles/app.css";

import Gun from "gun/gun";
import "gun/sea.js";
import "gun/lib/webrtc.js";
import "gun/lib/not.js";
import "gun/lib/path.js";
import "gun/lib/load.js";
import { nanoid } from "nanoid";

const store = Gun({
  peers:
    process.env.NODE_ENV === "development"
      ? ["http://localhost:8765/gun"]
      : ["http://localhost:8765/gun"],
  uuid: () => {
    return nanoid(11);
  },
});

function MyApp({ Component, pageProps }) {
  return <Component store={store} {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
