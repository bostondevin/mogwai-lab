import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Input, InputProps } from "../Elements/Input";
import { ContainerSettings } from "./toolbar/ContainerSettings";
import { nodeHook, editorHook } from "./toolbar/craft.utils";

export const CraftInput: UserComponent<InputProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Input ref={connect} {...props} readOnly={enabled} />;
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
