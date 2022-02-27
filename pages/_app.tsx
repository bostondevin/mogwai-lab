import "../styles/app.css";

import Gun from "gun/gun";
import "gun/sea.js";
import "gun/lib/webrtc.js";
import "gun/lib/not.js";
import "gun/lib/path.js";
import "gun/lib/load.js";
import { nanoid } from "nanoid";

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

function MyApp({ Component, pageProps }) {
  return <Component gun={gun} {...pageProps} />;
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
