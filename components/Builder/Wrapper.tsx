import React, { useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import { Appbar } from "../Appbar/Appbar";
import { Sidebar } from "./EditPanel/EditPanel";

export const Wrapper = ({ store, children }): JSX.Element => {
  const {
    enabled,
    connectors,
    actions: { setOptions, deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const router = useRouter();

  useEffect(() => {
    if (store) {
      const path = window.location.pathname;
      const template = store.get("templates").get(path);
      console.log(path);
      template.once((d) => {
        if (d) {
          const json = lz.decompress(lz.decodeBase64(decodeURIComponent(d)));
          console.log(json);
          console.log(JSON.parse(json));

          if (json) deserialize(json);
        } else {
          console.log("No template for template" + path);

          // console.log(d);
          const blank = {
            ROOT: {
              custom: {
                displayName: "App",
              },
              displayName: "Container",
              hidden: false,
              isCanvas: true,
              linkedNodes: {},
              nodes: [],
              props: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                fillSpace: "no",
                width: "800px",
                height: "auto",
              },
              type: {
                resolvedName: "Container",
              },
            },
          };

          console.log(JSON.stringify(blank));
          deserialize(JSON.stringify(blank));
        }
      });
    }
  }, [router.asPath]);

  return (
    <div className="flex h-full overflow-hidden flex-row w-full fixed">
      <div className="page-container flex flex-1 h-full flex-col">
        <Appbar store={store} />

        <div
          className={cx([
            "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
            {
              "bg-renderer-gray": enabled,
            },
          ])}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          <div className="flex-col flex items-center pt-8">{children}</div>

          <div className="flex items-center justify-center w-full pt-6 text-xs text-light-gray-2">
            Store
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};
