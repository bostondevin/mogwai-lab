import React, { useState, useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import styled from "styled-components";
import { useRouter } from "next/router";
import lz from "lzutf8";

import { Toolbar } from "./SettingsPanel";
import { ComponentsPanel } from "./Components";
import { DataPanel } from "./DataPanel";

import { Button } from "../../Elements/Button/Button/Button";
import { Icon } from "../../Elements/Media/Icon/Icon";

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;

export const Sidebar = ({ store }): JSX.Element => {
  const [path, setPath] = useState(null);
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const router = useRouter();

  useEffect(() => {
    setPath(window.location.pathname);
    store
      .get("templates")
      .get("web:components")
      .once((d) => {
        console.log(d);
      });
  }, [router.asPath]);

  const doSave = () => {
    if (enabled) {
      const json = query.serialize();
      const condensedJson = encodeURIComponent(
        lz.encodeBase64(lz.compress(json))
      );
      const template = store.path(("templates" + path).split("/")).get("html");
      template.put(condensedJson, () => {});
    }
  };

  const toggleOutlines = () => {
    // actions.setOptions((options) => (options.outlines = !outlines));
  };

  const cancelEdit = () => {
    actions.setOptions((options) => (options.enabled = false));
  };

  const clear = () => {
    if (confirm("Are you sure you want to clear this page?")) {
      const template = store.path(("templates" + path).split("/")).get("html");
      template.put(null, () => {
        console.log("Removed");
      });
    }
  };

  const saveChanges = () => {
    doSave();
    actions.setOptions((options) => (options.enabled = !enabled));
  };

  return (
    <SidebarDiv
      enabled={enabled}
      className="sidebar transition bg-white w-2 flex flex-col h-full overflow-y-auto"
    >
      <ul className="flex mr-3 bg-slate-700 text-white/75 w-full p-1 text-sm">
        <li className="flex w-full">
          <Button
            type="button"
            tooltip="Close"
            onClick={cancelEdit}
            placement="bottom"
            className="px-2"
          >
            <Icon className="fa-solid fa-times" />
          </Button>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Outlines"
            placement="bottom"
            onClick={toggleOutlines}
            disabled={!canUndo}
            className="px-2"
          >
            <Icon
              className={
                "fa-solid fa-square-dashed" + (canUndo ? "" : " opacity-50")
              }
            />
          </Button>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Remove All"
            onClick={clear}
            placement="bottom"
            className="px-2"
          >
            <Icon className="fa-solid fa-trash" />
          </Button>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Undo"
            placement="bottom"
            onClick={() => actions.history.undo()}
            disabled={!canUndo}
            className="px-2"
          >
            <Icon
              className={"fa-solid fa-undo" + (canUndo ? "" : " opacity-50")}
            />
          </Button>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Redo"
            placement="bottom"
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            className="px-2"
          >
            <Icon
              className={"fa-solid fa-redo" + (canRedo ? "" : " opacity-50")}
            />
          </Button>
        </li>

        <li className="flex gap-2">
          <Button
            type="button"
            onClick={saveChanges}
            disabled={!canUndo}
            tooltip={enabled ? "Save" : "Edit"}
            placement="bottom"
            className="px-2"
          >
            <Icon
              className={
                "fa-solid fa-floppy-disk" + (canUndo ? "" : " opacity-50")
              }
            />
          </Button>
        </li>
      </ul>

      <ComponentsPanel />

      <Toolbar />

      <DataPanel store={store} path={path} />

      <Layers expandRootOnLoad={true} />
    </SidebarDiv>
  );
};
