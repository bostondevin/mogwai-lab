import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

import React, { useState } from "react";
import styled from "styled-components";

import { Toolbar } from "./SettingsPanel/SettingsPanel";
import { ComponentsPanel } from "./Components";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export const Sidebar = () => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event) => {
    console.log(event);
    // setSelectedTab(newValue);
  };

  return (
    <SidebarDiv
      enabled={enabled}
      className="sidebar transition bg-white w-2 flex flex-col h-full overflow-y-auto"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Components" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={0} index={0}>
        <ComponentsPanel />
      </TabPanel>
      <TabPanel value={1} index={1}>
        <Toolbar />
      </TabPanel>
      <Layers expandRootOnLoad={true} />
    </SidebarDiv>
  );
};
