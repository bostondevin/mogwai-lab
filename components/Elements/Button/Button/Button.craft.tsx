import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Button, ButtonProps } from "./Button";
import { ButtonSettings } from "../../../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftButton: UserComponent<ButtonProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Button ref={connect} {...props} disabled={enabled}>
      {props.children}
    </Button>
  );
};

CraftButton.craft = {
  displayName: "Button",
  props: {
    type: "button",
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  rules: {
    canDrag: () => true,
    /*
    canMoveIn: (nodes) =>
      nodes.every((node) => node.data.type === Text || node.data.type === Icon),
      */
  },
  related: {
    toolbar: ButtonSettings,
  },
};
