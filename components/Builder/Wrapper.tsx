import React, { useEffect, useRef, useState } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import Ruler, { RulerProps, RulerInterface } from "@scena/react-ruler";

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

  const rulerRef = useRef<RulerInterface | null>(null);
  const nameDOM = useRef<HTMLElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (store) {
      store
        .get("editor")
        .get("outlines")
        .on((d) => setOutlinesVisible(d));

      store
        .get("editor")
        .get("screen")
        .on((d) => {
          setScreenSize(d);
          if (rulerRef?.current) rulerRef.current.resize();
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
  }, []);

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
                  ref={rulerRef}
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
    </>
  );
};
