import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ListItem } from "./Core/ListItem";
import { CraftListItem } from "./ListItem.craft";
import { UnOrderedList } from "./Core/UnOrderedList";
import { CommonContainerProps } from "../../interfaces/common.interface";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftUnOrderedList: UserComponent<CommonContainerProps> = (
  props
) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <UnOrderedList
      ref={connect}
      {...props}
      className={
        enabled ? props.className + editorEnabledAppend : props.className
      }
    >
      {props.children}

      {!props.children && enabled && (
        <ListItem
          className={emptyContainerClass}
          style={emptyContainerStyle}
        ></ListItem>
      )}
    </UnOrderedList>
  );
};

CraftUnOrderedList.craft = {
  displayName: "Unordered List",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) => {
      return nodes.every((node) => node.data.type === CraftListItem);
    },
  },
  related: {
    toolbar: ContainerSettings,
  },
};
