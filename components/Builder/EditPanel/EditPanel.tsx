import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import React, { useState } from "react";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";

import CustomizeIcon from "../../../public/icons/customize.svg";
import LayerIcon from "../../../public/icons/layers.svg";
import { Toolbar } from "./SettingsPanel/SettingsPanel";
import { Toolbox } from "./ComponentsPanel/ComponentsPanel";

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [toolboxVisible, setToolboxVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2">
      <div className="flex flex-col h-full">
        <SidebarItem
          icon={CustomizeIcon}
          title="Components"
          height={"33%"}
          visible={toolboxVisible}
          onChange={(val) => setToolboxVisible(val)}
        >
          <Toolbox />
        </SidebarItem>

        <SidebarItem
          icon={CustomizeIcon}
          title="Settings"
          height={"33%"}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <Toolbar />
        </SidebarItem>

        <SidebarItem
          icon={LayerIcon}
          title="Layers"
          height={"33%"}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
