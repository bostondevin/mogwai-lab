import React, { useState, useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import { useRouter } from "next/router";
import lz from "lzutf8";

import { SettingsPanel } from "./SettingsPanel";
import { ComponentsPanel } from "./Components";
import { DataPanel } from "./DataPanel";
import { Layer } from "./layers/Layer";
import { Text } from "../Core/Text";
import { Popup } from "../Core/Popup";
import { ButtonBar } from "components/Core/ButtonBar";

const barWidth = 350;

export const EditPanel = ({ store, darkMode }): JSX.Element => {
  const [path, setPath] = useState(null);
  const [rulerVisible, setRulerVisible] = useState(false);
  const [outlinesVisible, setOutlinesVisible] = useState(false);
  const [screen, setScreen] = useState("screen");
  const [activeTab, setActiveTab] = useState("components");

  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const router = useRouter();

  useEffect(() => {
    store
      .get("editor")
      .get("screen")
      .on((d) => setScreen(d));

    store
      .get("editor")
      .get("activeTab")
      .on((d) => setActiveTab(d));

    store
      .get("editor")
      .get("outlines")
      .on((d) => setOutlinesVisible(d));

    store
      .get("editor")
      .get("ruler")
      .on((d) => setRulerVisible(d));
  }, []);

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

  const changeTab = (e) => {
    store.get("editor").get("activeTab").put(e.targetEleId);
  };

  const changeScreen = (d) => {
    store.get("editor").get("screen").put(d);
  };

  const toggleOutlines = () => {
    store.get("editor").get("outlines").put(!outlinesVisible);
  };

  const toggleRuler = () => {
    console.log(rulerVisible);
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

  const tabItems = [
    { id: "components", label: "Components" },
    { id: "settings", label: "Settings" },
    { id: "data", label: "Data" },
  ];

  const screenSizes = [
    { id: "mobile", label: "Mobile", icon: "fa-solid fa-mobile-screen" },
    { id: "tablet", label: "Tablet", icon: "fa-solid fa-tablet-screen" },
    { id: "screen", label: "Full", icon: "fa-solid fa-display" },
  ];

  const navItemClass =
    "p-2 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-900 select-none cursor-pointer";

  return (
    <div
      style={{
        width: barWidth + "px",
        opacity: enabled ? 1 : 0,
        marginRight: enabled ? 0 : -barWidth + "px",
      }}
      className="sidebar w-2 border-l border-slate-300 dark:border-slate-800 flex shadow-md flex-col h-full overflow-y-auto bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white/75 ease-in-out transition-all duration-300"
    >
      <nav className="bg-slate-300 dark:bg-slate-800 w-full text-sm">
        <ul className="flex w-full">
          <li className="flex w-full">
            <button
              type="button"
              title="Close"
              onClick={() => cancelEdit()}
              className={navItemClass}
            >
              <i className="fa-solid fa-times" />
            </button>
          </li>

          <li className="flex">
            <Popup
              bgColor={darkMode ? "rgba(51,65,85,1)" : "rgba(201,213,225,1)"}
              width={100}
              menu={
                <div className="text-xs bg-slate-700 dark:bg-slate-300 text-white dark:text-black w-full flex flex-col rounded-md shadow-md py-1">
                  {screenSizes.map((item) => {
                    return (
                      <button
                        key={item.id}
                        onClick={() => changeScreen(item.id)}
                        type="button"
                        className="p-2 hover:bg-slate-800 dark:hover:bg-slate-400 select-none cursor-pointer flex gap-2"
                      >
                        <i className={item.icon + " flex"} />
                        <Text
                          type="span"
                          text={item.label}
                          disabled={true}
                          className="w-full flex"
                        />
                      </button>
                    );
                  })}
                </div>
              }
              position="bottom center"
            >
              <button type="button" title={screen} className={navItemClass}>
                <i
                  className={
                    "fa-solid " +
                    (screen === "mobile"
                      ? "fa-mobile-screen"
                      : screen === "tablet"
                      ? "fa-tablet-screen"
                      : "fa-display")
                  }
                />
              </button>
            </Popup>
          </li>

          <li className="flex">
            <button
              type="button"
              title="Outlines"
              onClick={() => toggleOutlines()}
              className={
                outlinesVisible ? navItemClass : "opacity-50 " + navItemClass
              }
            >
              <i
                className={
                  "fa-solid fa-square-dashed" +
                  (outlinesVisible ? "" : " opacity-50")
                }
              />
            </button>
          </li>

          <li className="flex">
            <button
              type="button"
              title="Ruler"
              onClick={() => toggleRuler()}
              className={
                rulerVisible ? navItemClass : "opacity-50 " + navItemClass
              }
            >
              <i className={"fa-solid fa-ruler"} />
            </button>
          </li>

          <li className="flex">
            <button
              type="button"
              title="Remove All"
              onClick={() => clear()}
              className={navItemClass}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </li>

          <li className="flex">
            <button
              type="button"
              title="Undo"
              onClick={() => actions.history.undo()}
              disabled={!canUndo}
              className={navItemClass}
            >
              <i
                className={"fa-solid fa-undo" + (canUndo ? "" : " opacity-50")}
              />
            </button>
          </li>

          <li className="flex">
            <button
              type="button"
              title="Redo"
              disabled={!canRedo}
              onClick={() => actions.history.redo()}
              className={navItemClass}
            >
              <i
                className={"fa-solid fa-redo" + (canRedo ? "" : " opacity-50")}
              />
            </button>
          </li>

          <li className="flex gap-2">
            <button
              type="button"
              onClick={() => saveChanges}
              disabled={!canUndo}
              title={enabled ? "Save" : "Edit"}
              className={navItemClass}
            >
              <i
                className={
                  "fa-solid fa-floppy-disk" + (canUndo ? "" : " opacity-50")
                }
              />
            </button>
          </li>
        </ul>
      </nav>

      <ButtonBar onClick={changeTab} items={tabItems} selected={activeTab} />

      <div className="flex flex-col h-full overflow-y-auto mt-2">
        {activeTab === "components" && <ComponentsPanel />}
        {activeTab === "settings" && <SettingsPanel />}
        {activeTab === "data" && <DataPanel store={store} path={path} />}
      </div>

      <div className="text-xs">
        <h2 className="bg-slate-200 dark:bg-slate-800 py-2 px-2 uppercase select-none">
          <i className="fa-solid fa-layer-group mr-2" /> Layers
        </h2>
        <Layers renderLayer={Layer} expandRootOnLoad={true} />
      </div>
    </div>
  );
};
