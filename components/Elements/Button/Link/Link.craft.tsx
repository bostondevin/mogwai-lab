import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftIcon } from "../../Media/Icon/Icon.craft";
import { CraftText } from "../../Media/Text/Text.craft";
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
  displayName: "Hyperlink",
  props: {
    className: "",
  },
  rules: {
    canMoveIn: (nodes) => {
      return nodes.every(
        (node) => node.data.type === CraftText || node.data.type === CraftIcon
      );
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
