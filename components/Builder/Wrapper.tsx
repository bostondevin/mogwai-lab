import React, { useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import { Appbar } from "../Appbar";
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
      const template = store.path(("templates" + path).split("/")).get("html");
      //console.log(path);
      template.on((d) => {
        if (d) {
          const json = lz.decompress(lz.decodeBase64(decodeURIComponent(d)));
          if (json) deserialize(json);
        } else {
          //console.log("No template for template" + path);

          const blank = {
            ROOT: {
              custom: {
                displayName: "Application",
              },
              displayName: "Container",
              hidden: false,
              isCanvas: true,
              linkedNodes: {},
              nodes: [],
              props: {
                type: "div",
                className: "w-full h-full overflow-auto flex flex-col",
              },
              type: {
                resolvedName: "Container",
              },
            },
          };

          //console.log(JSON.stringify(blank));
          deserialize(JSON.stringify(blank));
        }
      });
    }
  }, [router.asPath]);

  return (
    <div className="flex h-full overflow-hidden flex-row w-full fixed">
      <div className="page-container flex h-full flex-col w-full">
        <Appbar />

        <div
          className={cx([
            "craftjs-renderer flex h-full w-full transition overflow-auto",
            {
              "p-3": enabled,
            },
          ])}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          {children}
        </div>
      </div>

      <Sidebar store={store} />
    </div>
  );
};
