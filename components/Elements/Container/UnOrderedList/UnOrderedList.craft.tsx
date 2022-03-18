import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ListItem } from "../ListItem/ListItem";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { UnOrderedList } from "./UnOrderedList";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

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
      className={props.className + (enabled ? editorEnabledAppend : "")}
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
  props: {
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes, self, helper) => {
      return nodes.every((node) => node.data.type === CraftListItem);
      //  && helper(self.id).decendants().length === 0
    },
  },
  related: {
    toolbar: ContainerSettings,
  },
};
