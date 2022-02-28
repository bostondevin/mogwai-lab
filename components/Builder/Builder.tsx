import React, { useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import lz from "lzutf8";
import cx from "classnames";

import { Appbar } from "./widgets/Appbar/Appbar";
import { Sidebar } from "./EditPanel/EditPanel";

export const Builder = ({ store, user, children }): JSX.Element => {
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
  }, [setOptions]);

  const router = useRouter();

  useEffect(() => {
    if (store) {
      const path = window.location.pathname;
      const template = store.get("templates").get(path);
      console.log(template);
      template.once((d) => {
        if (d) {
          const json = lz.decompress(lz.decodeBase64(decodeURIComponent(d)));
          console.log(json);
          if (json) deserialize(json);
        } else {
          console.log("No template for template" + path);
          console.log(d);
        }
      });
    }
  }, [router.asPath]);

  return (
    <div className="flex h-full overflow-hidden flex-row w-full fixed">
      <div className="page-container flex flex-1 h-full flex-col">
        <Appbar store={store} user={user} />

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
            {children}
          </div>

          <div className="flex items-center justify-center w-full pt-6 text-xs text-light-gray-2">
            User: {user?.is}
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};
