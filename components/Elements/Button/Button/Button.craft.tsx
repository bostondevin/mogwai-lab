import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftIcon } from "../../Media/Icon/Icon.craft";
import { CraftText } from "../../Media/Text/Text.craft";

import { Button, ButtonProps } from "./Button";
import { ButtonSettings } from "../../../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftButton: UserComponent<ButtonProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <button
      ref={connect}
      className={props.className}
      disabled={enabled || props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

CraftButton.craft = {
  displayName: "Button",
  props: {},
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
