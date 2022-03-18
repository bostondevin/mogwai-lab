import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Icon, IconProps } from "./Icon";
import { ButtonSettings } from "../../../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftIcon: UserComponent<IconProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Icon ref={connect} {...props} />;
};

CraftIcon.craft = {
  displayName: "Icon",
  props: {
    className: "fas fa-home",
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
