import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ListItem } from "../ListItem/ListItem";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { OrderedList } from "./OrderedList";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

export const CraftOrderedList: UserComponent<CommonContainerProps> = (
  props
) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <OrderedList
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
    </OrderedList>
  );
};

CraftOrderedList.craft = {
  displayName: "Ordered List",
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
