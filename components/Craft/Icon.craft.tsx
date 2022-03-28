import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ButtonSettings } from "../Builder/settings/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/settings/craft.utils";
import { IconProps } from "../common.interface";

export const CraftIcon: UserComponent<IconProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <i ref={connect} {...props} />;
};

CraftIcon.craft = {
  displayName: "Icon",
  props: {},
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
