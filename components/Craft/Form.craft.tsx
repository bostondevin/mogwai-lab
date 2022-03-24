import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Div } from "../Core/Div";
import { CraftListItem } from "./ListItem.craft";
import { Form, FormProps } from "../Core/Form";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftForm: UserComponent<FormProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Form
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}
      {!props.children && enabled && (
        <Div className={emptyContainerClass} style={emptyContainerStyle}></Div>
      )}
    </Form>
  );
};

CraftForm.craft = {
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
