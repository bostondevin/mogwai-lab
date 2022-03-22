import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerDiv } from "../Div/ContainerDiv";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { Form, FormProps } from "./Form";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

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
        <ContainerDiv
          className={emptyContainerClass}
          style={emptyContainerStyle}
        ></ContainerDiv>
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
