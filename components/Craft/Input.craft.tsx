import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Input } from "../Core/Input";
import { Select } from "../Core/Select";
import { Textarea } from "../Core/Textarea";
import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import { InputProps } from "../common.interface";

import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftInput: UserComponent<InputProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type !== "textarea" && props.type !== "select" && (
        <Input ref={connect} {...props} readOnly={enabled} />
      )}
      {props.type === "textarea" && (
        <Textarea ref={connect} {...props} readOnly={enabled} />
      )}
      {props.type === "select" && (
        <Select ref={connect} {...props} readOnly={enabled} />
      )}
    </>
  );
};

CraftInput.craft = {
  displayName: "Input",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
