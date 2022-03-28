import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftListItem } from "./ListItem.craft";
import { FieldGroup, AbstractControl } from "react-reactive-form";
import { FormProps } from "../common.interface";
import { ContainerSettings } from "../Builder/settings/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/settings/craft.utils";

export const CraftForm: UserComponent<FormProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  const submitForm = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <FieldGroup
      render={({ value }: AbstractControl) => (
        <form
          ref={connect}
          onSubmit={(e) => submitForm(e, value)}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}
          {!props.children && enabled && (
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
          )}
        </form>
      )}
    />
  );
};

CraftForm.craft = {
  displayName: "Form",
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
