import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Textarea, TextareaProps } from "./Textarea";
import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftTextarea: UserComponent<TextareaProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Textarea ref={connect} {...props} readOnly={enabled} />;
};

CraftTextarea.craft = {
  displayName: "Textarea",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};