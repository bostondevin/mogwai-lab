import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerProps } from "../common.interface";

import { ContainerSettings } from "../Builder/settings/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/settings/craft.utils";

export const CraftListItem: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <li
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <div className={emptyContainerClass} style={emptyContainerStyle}>
          Some text goes here
        </div>
      )}
    </li>
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
