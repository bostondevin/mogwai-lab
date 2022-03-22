import React, { useState, useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import { useRouter } from "next/router";
import lz from "lzutf8";
import GridLayout from "react-grid-layout";

import { Toolbar } from "./SettingsPanel";
import { ComponentsPanel } from "./Components";
import { DataPanel } from "./DataPanel";

import { Button } from "../../Elements/Button/Button/Button";
import { Icon } from "../../Elements/Media/Icon/Icon";
import { Text } from "../../Elements/Media/Text/Text";
import { Popup } from "../../Elements/Container/Popup/Popup";
import { Nav } from "../../Elements/Container/Nav/Nav";
import { ContainerDiv } from "../../Elements/Container/Div/ContainerDiv";
import { UnOrderedList } from "../../Elements/Container/UnOrderedList/UnOrderedList";
import { ListItem } from "../../Elements/Container/ListItem/ListItem";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const EditPanel = ({ store }): JSX.Element => {
  const [path, setPath] = useState(null);
  const [rulerVisible, setRulerVisible] = useState(false);
  const [outlinesVisible, setOutlinesVisible] = useState(false);
  const [screen, setScreen] = useState("screen");
  const [layout, setLayout] = useState([
    { i: "components", x: 0, y: 0, w: 3, h: 4 },
    { i: "data", x: 3, y: 0, w: 3, h: 4 },
    { i: "layers", x: 0, y: 3, w: 6, h: 3 },
    { i: "toolbar", x: 0, y: 3, w: 6, h: 3 },
  ]);

  const size = useWindowSize();

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

    store
      .get("editor")
      .get("layout")
      .load((d) => {
        if (d) {
          let arr = [];
          Object.keys(d).forEach((l) => {
            let newObj = { i: l };
            arr.push({ ...newObj, ...d[l] });
          });
          console.log(arr);
          // setLayout(arr);
        }
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

  const changeScreen = (d) => {
    store.get("editor").get("screen").put(d);
  };

  const toggleOutlines = () => {
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

  const layoutChange = (newLayout) => {
    console.log(newLayout);
    newLayout.forEach((l) =>
      store
        .get("editor")
        .get("layout")
        .get(l.i)
        .put({ w: l.w, h: l.h, x: l.x, y: l.y })
    );
  };

  const getBarWidth = (width) => {
    if (screen === "mobile" || screen === "tablet") {
      if (screen === "mobile") {
        if (width > 500) {
          return width - 500;
        } else {
          return 380;
        }
      }

      if (screen === "tablet") {
        if (width > 790) {
          return width - 790;
        } else {
          return 380;
        }
      }
    } else {
      if (width > 1040) {
        return width - 350;
      } else {
        return 380;
      }
    }

    /*
    screen === "mobile"
                  ? 480
                  : screen === "tablet"
                  ? 768
                  : width;
*/
  };

  return (
    <ContainerDiv
      style={{
        width: getBarWidth(size.width) + "px",
        opacity: enabled ? 1 : 0,
        marginRight: enabled ? 0 : -getBarWidth(size.width) + "px",
      }}
      className="sidebar w-2 flex flex-col h-full overflow-y-auto bg-slate-300 dark:bg-slate-300 ease-in-out transition-all duration-300"
    >
      <Nav className="bg-slate-900 dark:bg-slate-900 text-white/75 w-full text-sm">
        <UnOrderedList className="flex w-full">
          <ListItem className="flex w-full">
            <Button
              type="button"
              tooltip="Close"
              onClick={cancelEdit}
              placement="bottom"
              className="px-3 py-2 hover:bg-slate-800"
            >
              <Icon className="fa-solid fa-times" />
            </Button>
          </ListItem>

          <ListItem className="flex">
            <Popup
              menu={
                <div className="text-xs bg-slate-800 text-white w-full">
                  <Button
                    onClick={() => changeScreen("mobile")}
                    type="button"
                    className="p-2 hover:bg-slate-800 select-none cursor-pointer"
                  >
                    <Icon className="fa-solid fa-mobile-screen mr-1" />
                    <Text
                      type="span"
                      text="Mobile"
                      disabled={true}
                      className="w-full"
                    />
                  </Button>
                  <Button
                    onClick={() => changeScreen("tablet")}
                    type="button"
                    className="p-2 hover:bg-slate-800 select-none cursor-pointer"
                  >
                    <Icon className="fa-solid fa-tablet-screen mr-1" />
                    <Text
                      type="span"
                      text="Tablet"
                      disabled={true}
                      className="w-full"
                    />
                  </Button>
                  <Button
                    onClick={() => changeScreen("screen")}
                    type="button"
                    className="p-2 hover:bg-slate-800 select-none cursor-pointer"
                  >
                    <Icon className="fa-solid fa-display mr-1" />
                    <Text
                      type="span"
                      text="Full"
                      disabled={true}
                      className="w-full"
                    />
                  </Button>
                </div>
              }
              position="bottom center"
            >
              <Button
                type="button"
                tooltip={screen}
                placement="bottom"
                className="p-2 hover:bg-slate-800 select-none cursor-pointer"
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
          </ListItem>

          <ListItem className="flex">
            <Button
              type="button"
              tooltip="Outlines"
              placement="bottom"
              onClick={() => toggleOutlines()}
              disabled={!outlinesVisible}
              className="p-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon
                className={
                  "fa-solid fa-square-dashed" +
                  (outlinesVisible ? "" : " opacity-50")
                }
              />
            </Button>
          </ListItem>

          <ListItem className="flex">
            <Button
              type="button"
              tooltip="Ruler"
              placement="bottom"
              onClick={toggleRuler}
              disabled={!rulerVisible}
              className="p-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon
                className={
                  "fa-solid fa-ruler" + (rulerVisible ? "" : " opacity-50")
                }
              />
            </Button>
          </ListItem>

          <ListItem className="flex">
            <Button
              type="button"
              tooltip="Remove All"
              onClick={clear}
              placement="bottom"
              className="p-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon className="fa-solid fa-trash" />
            </Button>
          </ListItem>

          <ListItem className="flex">
            <Button
              type="button"
              tooltip="Undo"
              placement="bottom"
              onClick={() => actions.history.undo()}
              disabled={!canUndo}
              className="p-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon
                className={"fa-solid fa-undo" + (canUndo ? "" : " opacity-50")}
              />
            </Button>
          </ListItem>

          <ListItem className="flex">
            <Button
              type="button"
              tooltip="Redo"
              placement="bottom"
              disabled={!canRedo}
              onClick={() => actions.history.redo()}
              className="p-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon
                className={"fa-solid fa-redo" + (canRedo ? "" : " opacity-50")}
              />
            </Button>
          </ListItem>

          <ListItem className="flex gap-2">
            <Button
              type="button"
              onClick={saveChanges}
              disabled={!canUndo}
              tooltip={enabled ? "Save" : "Edit"}
              placement="bottom"
              className="px-3 py-2 hover:bg-slate-800 select-none cursor-pointer"
            >
              <Icon
                className={
                  "fa-solid fa-floppy-disk" + (canUndo ? "" : " opacity-50")
                }
              />
            </Button>
          </ListItem>
        </UnOrderedList>
      </Nav>

      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        maxCols={12}
        width={getBarWidth(size.width)}
        onLayoutChange={layoutChange}
        isBounded={true}
        margin={[5, 5]}
      >
        <div key="components" className="bg-slate-900 p-2 overflow-y-auto">
          <ComponentsPanel />
        </div>
        <div key="data" className="bg-slate-900 p-2 overflow-y-auto">
          <DataPanel store={store} path={path} />
        </div>
        <div key="layers" className="bg-slate-900 p-2 overflow-y-auto">
          <Layers expandRootOnLoad={true} />
        </div>
        <div key="toolbar" className="bg-slate-900 p-2 overflow-y-auto">
          <Toolbar />
        </div>
      </GridLayout>
    </ContainerDiv>
  );
};
