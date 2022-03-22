import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Div } from "./Core/Div";
import { Header } from "./Core/Header";
import { CraftListItem } from "./ListItem.craft";
import { CommonContainerProps } from "../../interfaces/Container.interface";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftHeader: UserComponent<CommonContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Header
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <Div className={emptyContainerClass} style={emptyContainerStyle}></Div>
      )}
    </Header>
  );
};

CraftHeader.craft = {
  displayName: "Header",
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
