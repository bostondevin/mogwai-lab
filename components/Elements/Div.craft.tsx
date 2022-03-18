import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Div, DivProps } from "../Elements/Div";
import { ContainerSettings } from "./toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "./toolbar/craft.utils";

export const CraftDiv: UserComponent<DivProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Div
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <Div className={emptyContainerClass} style={emptyContainerStyle}></Div>
      )}
    </Div>
  );
};

CraftDiv.craft = {
  displayName: "Div",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
