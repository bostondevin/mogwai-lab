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
import { Text } from "../../Elements/Media/Text/Text";
import { Popup } from "../../Elements/Container/Popup/Popup";

const barWidth = 350;
export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: ${barWidth}px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  margin-right: ${(props) => (props.enabled ? 0 : -barWidth)}px;
`;

export const EditPanel = ({ store }): JSX.Element => {
  const [path, setPath] = useState(null);
  const [rulerVisible, setRulerVisible] = useState(false);
  const [outlinesVisible, setOutlinesVisible] = useState(false);
  const [screen, setScreen] = useState("screen");

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

    store
      .get("editor")
      .get("screen")
      .on((d) => setScreen(d));

    store
      .get("editor")
      .get("outlines")
      .on((d) => setOutlinesVisible(d));

    store
      .get("editor")
      .get("ruler")
      .on((d) => setRulerVisible(d));
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

  const changeScreen = (e, d) => {
    store.get("editor").get("screen").put(d);
  };

  const toggleOutlines = (e) => {
    store.get("editor").get("outlines").put(!outlinesVisible);
  };

  const toggleRuler = () => {
    store.get("editor").get("ruler").put(!rulerVisible);
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
      className="sidebar transition w-2 flex flex-col h-full overflow-y-auto bg-slate-700"
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
          {screen}
          <Popup
            menu={
              <div className="text-xs bg-slate-800 text-white w-full">
                <Button
                  onClick={(e) => changeScreen(e, "mobile")}
                  type="button"
                  className="block w-full py-1 hover:bg-slate-900 select-none cursor-pointer"
                >
                  <Icon className="fa-solid fa-mobile-screen mr-1" />
                  <Text type="span" text="Mobile" disabled={true} />
                </Button>
                <Button
                  onClick={(e) => changeScreen(e, "tablet")}
                  type="button"
                  className="block w-full py-1 hover:bg-slate-900 select-none cursor-pointer"
                >
                  <Icon className="fa-solid fa-tablet-screen mr-1" />
                  <Text type="span" text="Tablet" disabled={true} />
                </Button>
                <Button
                  onClick={(e) => changeScreen(e, "screen")}
                  type="button"
                  className="block w-full py-1 hover:bg-slate-900 select-none cursor-pointer"
                >
                  <Icon className="fa-solid fa-display mr-1" />
                  <Text type="span" text="Fullscreen" disabled={true} />
                </Button>
              </div>
            }
            position="bottom center"
          >
            <Button
              type="button"
              tooltip="Mobile"
              placement="bottom"
              className="px-2"
            >
              <Icon
                className={
                  "fa-solid " +
                  (screen === "mobile"
                    ? "fa-mobile-screen"
                    : screen === "tablet"
                    ? "fa-tablet-screen"
                    : "fa-display")
                }
              />
            </Button>
          </Popup>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Outlines"
            placement="bottom"
            onClick={(e) => toggleOutlines(e)}
            disabled={!outlinesVisible}
            className="px-2"
          >
            <Icon
              className={
                "fa-solid fa-square-dashed" +
                (outlinesVisible ? "" : " opacity-50")
              }
            />
          </Button>
        </li>

        <li className="flex">
          <Button
            type="button"
            tooltip="Ruler"
            placement="bottom"
            onClick={toggleRuler}
            disabled={!rulerVisible}
            className="px-2"
          >
            <Icon
              className={
                "fa-solid fa-ruler" + (rulerVisible ? "" : " opacity-50")
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
