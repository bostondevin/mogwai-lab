import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { DivContainer } from "../Core/Div";
import { ListItem } from "../Core/ListItem";
import { ContainerProps } from "../common.interface";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftListItem: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <ListItem
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <DivContainer
          className={emptyContainerClass}
          style={emptyContainerStyle}
        >
          Some text goes here
        </DivContainer>
      )}
    </ListItem>
  );
};

CraftListItem.craft = {
  displayName: "List Item",
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
