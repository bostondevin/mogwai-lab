import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Input } from "./Core/Input";
import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import { InputProps } from "../../interfaces/common.interface";

import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

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
