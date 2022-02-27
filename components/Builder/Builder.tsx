import React, { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import { Appbar } from "./widgets/Appbar/Appbar";
import { Sidebar } from "./EditPanel/EditPanel";

type BuilderProps = {};

export const Builder: React.FC = (props: BuilderProps) => {
  const {
    enabled,
    connectors,
    actions: { setOptions, deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = false;
        });
      }, 200);
    });
  }, [setOptions, deserialize]);

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    const existingPage = localStorage.getItem(path);

    if (existingPage) {
      const json = lz.decompress(lz.decodeBase64(existingPage));
      if (json) deserialize(json);
    }
  }, [router.asPath]);

  return (
    <div className={cx(["flex h-full overflow-hidden flex-row w-full fixed"])}>
      <div className="page-container flex flex-1 h-full flex-col">
        <Appbar />

        <div
          className={cx([
            "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
            {
              "bg-renderer-gray": enabled,
            },
          ])}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          <div className="relative flex-col flex items-center pt-8">
            <Frame></Frame>
          </div>
          <div
            className={
              "flex items-center justify-center w-full pt-6 text-xs text-light-gray-2"
            }
          >
            Footer text
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};
