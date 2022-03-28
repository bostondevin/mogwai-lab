import React from "react";
import { UserComponent, useNode, useEditor, Element } from "@craftjs/core";

import { DivContainer } from "../Core/Div";
import { Aside } from "../Core/Aside";

import { CraftListItem } from "./ListItem.craft";
import { ContainerProps } from "../common.interface";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftSideNav: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Element id="test1" canvas is={Div} className="h-full flex">
      <Element
        id="test2"
        canvas
        is={Div}
        className="w-60 h-full shadow-md flex"
      >
        DDDDD
      </Element>
      <Element id="test3" canvas is={Div} className="w-full h-full flex">
        sssss
      </Element>
    </Element>
  );
};

CraftSideNav.craft = {
  displayName: "Aside",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) => {
      return nodes.every((node) => node.data.type !== CraftListItem);
    },
  },
  related: {
    toolbar: ContainerSettings,
  },
};
