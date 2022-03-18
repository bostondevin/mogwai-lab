import React, { useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import { Appbar } from "../Appbar";
import { Sidebar } from "./EditPanel/EditPanel";
import { Div } from "../Elements/Container/Div/Div";

export const Wrapper = ({ store, children }): JSX.Element => {
  const {
    enabled,
    connectors,
    actions: { deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

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
    }
  }, [router.asPath]);

  return (
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

      <Sidebar store={store} />
    </Div>
  );
};
