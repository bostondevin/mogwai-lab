import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import lz from "lzutf8";

import { Toolbar } from "./SettingsPanel/SettingsPanel";
import { ComponentsPanel } from "./Components";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Button } from "../../Button/_raw/Button";
import { Icon } from "../../Icon/Icon";

// import Tooltip from "@mui/material/Tooltip";

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="h-full"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ height: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
  }, [router.asPath]);

  const doSave = () => {
    if (enabled) {
      const json = query.serialize();
      const condensedJson = encodeURIComponent(
        lz.encodeBase64(lz.compress(json))
      );
      const template = store.get("templates").get(path);
      template.put(condensedJson, () => {
        //console.log("Template Saved! templates" + path);
        //console.log(condensedJson);
        //console.log(d);
      });
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
      const template = store.get("templates").get(path);
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

      <Layers expandRootOnLoad={true} />
    </SidebarDiv>
  );
};
