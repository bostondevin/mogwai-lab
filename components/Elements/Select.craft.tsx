import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Select } from "./Core/Select";
import { SelectProps } from "../../interfaces/Container.interface";
import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftSelect: UserComponent<SelectProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Select ref={connect} {...props} readOnly={enabled} />;
};

CraftSelect.craft = {
  displayName: "Select",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
