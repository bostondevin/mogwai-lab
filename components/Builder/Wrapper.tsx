import React, { useEffect, useRef, useState } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import Ruler from "@scena/react-ruler";

import { Appbar } from "../Appbar";
import { EditPanel } from "./EditPanel/EditPanel";
import { Div } from "../Elements/Container/Div/Div";

export const Wrapper = ({ store, children }): JSX.Element => {
  const {
    enabled,
    connectors,
    actions: { deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [rulerVisible, setRulerVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  const [outlinesVisible, setOutlinesVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const ruler = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (store) {
      const path = window.location.pathname;
      const template = store.path(("templates" + path).split("/")).get("html");

      template.on((d) => {
        if (d) {
          const json = lz.decompress(lz.decodeBase64(decodeURIComponent(d)));
          if (json) deserialize(json);
        } else {
          const blank = {
            ROOT: {
              displayName: "Application",
              type: "Div",
              isCanvas: true,
              props: {
                className: "w-full h-full overflow-auto flex flex-col",
              },
              hidden: false,
            },
          };

          // console.log(JSON.stringify(blank));
          deserialize(JSON.stringify(blank));
        }
      });

      store
        .get("editor")
        .get("outlines")
        .on((d) => setOutlinesVisible(d));

      store
        .get("editor")
        .get("screen")
        .on((d) => setScreenSize(d));

      store
        .get("editor")
        .get("ruler")
        .on((d) => setRulerVisible(d));

      store
        .get("editor")
        .get("dark")
        .on((d) => setDarkMode(d));
    }
  }, [router.asPath]);

  return (
    <>
      {enabled && rulerVisible && (
        <Ruler height={32} type="horizontal" ref={ruler} />
      )}

      <Div className="flex h-full overflow-hidden flex-row w-full fixed">
        <Div className="page-container flex h-full flex-col w-full">
          <Appbar />

          <Div
            className={cx([
              "craftjs-renderer flex h-full w-full transition overflow-auto",
              {
                "p-3": enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            {children}
          </Div>
        </Div>

        <EditPanel store={store} />
      </Div>
    </>
  );
};
