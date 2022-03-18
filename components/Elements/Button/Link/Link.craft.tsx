import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Link, LinkProps } from "./Link";
import { ButtonSettings } from "../../../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftLink: UserComponent<LinkProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Link ref={connect} {...props}>
      {props.children}
    </Link>
  );
};

CraftLink.craft = {
  displayName: "Button",
  props: {
    className: "",
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
