import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Div } from "../Div/Div";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { Fieldset, FieldsetProps } from "./Fieldset";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

export const CraftFieldset: UserComponent<FieldsetProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Fieldset
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <Div className={emptyContainerClass} style={emptyContainerStyle}></Div>
      )}
    </Fieldset>
  );
};

CraftFieldset.craft = {
  displayName: "Fieldset",
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