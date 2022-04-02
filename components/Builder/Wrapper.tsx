import React, { useEffect, useRef, useState } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import Ruler from "@scena/react-ruler";

import { tailwindClassForm } from "../common.interface";

import { Appbar } from "../Core/Appbar";
import { EditPanel } from "./EditPanel";

export const Wrapper = ({ store, children }): JSX.Element => {
  const {
    enabled,
    connectors,
    actions: { deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [rulerVisible, setRulerVisible] = useState(false);
  const [screen, setScreenSize] = useState(null);

  const [outlinesVisible, setOutlinesVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const ruler = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (store) {
      console.log(tailwindClassForm);

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
                className: "w-full h-full flex flex-col",
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
        .on((d) => {
          setScreenSize(d);
        });

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
      <div className="flex h-full overflow-hidden flex-row w-full fixed bg-black/10 dark:bg-black/90">
        <div className="page-container flex h-full flex-col w-full">
          <div
            className="page-container flex h-full flex-col w-full bg-slate-200 dark:bg-slate-800"
            style={{
              width:
                screen === "mobile"
                  ? "480px"
                  : screen === "tablet"
                  ? "768px"
                  : undefined,
            }}
          >
            {enabled && rulerVisible && (
              <div className="w-full">
                <Ruler
                  height={32}
                  backgroundColor={
                    darkMode ? "rgba(0,0,0,.1)" : "rgba(255,255,255,.1)"
                  }
                  textColor={
                    darkMode ? "rgba(0,0,0,.4)" : "rgba(255,255,255,.4)"
                  }
                  lineColor={
                    darkMode ? "rgba(0,0,0,.3)" : "rgba(255,255,255,.3)"
                  }
                  type="horizontal"
                  ref={ruler}
                />
              </div>
            )}

            <nav className="flex w-full bg-white dark:bg-slate-900 ease-in-out transition-all duration-300">
              <div className="flex w-full shadow-md mb-1 dark:text-white">
                <Appbar screen={screen} store={store} />
              </div>
            </nav>

            <div
              className={cx([
                "craftjs-renderer flex h-full w-full overflow-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 ease-in-out transition-all duration-300",
                {
                  "p-3": enabled,
                },
              ])}
              ref={(ref) =>
                connectors.select(connectors.hover(ref, null), null)
              }
            >
              {children}
            </div>
          </div>
        </div>

        <EditPanel store={store} darkMode={darkMode} />
      </div>
      <div className="bg-black/25 bg-black/50 bg-black/75 bg-black/100 bg-white/25 bg-white/50 bg-white/75 bg-white/100 w-full w-1/6 w-1/5 w-1/4 w-1/3 w-1/2 w-3/4 h-10 h-9 h-8 pl-3 w-4 pr-6 placeholder-gray-300 border rounded-md appearance-none focus:outline-none text-base text-6xl text-5xl text-4xl text-3xl text-2xl text-xl hidden shadow-md mb-10 mb-9 mb-8 mb-7 mb-6 mb-5 mb-4 mb-3 mb-2 mb-1"></div>
    </>
  );
};
