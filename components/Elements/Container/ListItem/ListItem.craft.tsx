import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerDiv } from "../Div/ContainerDiv";
import { ListItem } from "./ListItem";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

export const CraftListItem: UserComponent<CommonContainerProps> = (props) => {
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
        <ContainerDiv
          className={emptyContainerClass}
          style={emptyContainerStyle}
        >
          Some text goes here
        </ContainerDiv>
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
