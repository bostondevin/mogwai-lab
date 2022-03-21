import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Div } from "../Div/Div";
import { Aside } from "./Aside";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

export const CraftAside: UserComponent<CommonContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Aside
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <Div className={emptyContainerClass} style={emptyContainerStyle}></Div>
      )}
    </Aside>
  );
};

CraftAside.craft = {
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
