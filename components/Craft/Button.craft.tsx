import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftIcon } from "./Icon.craft";
import { CraftText } from "./Text.craft";

import { Button, ButtonProps } from "../Core/Button";
import { ButtonSettings } from "../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

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
  props: {},
  rules: {
    canMoveIn: (nodes, self, helper) => {
      return nodes.every(
        (node) => node.data.type === CraftText || node.data.type === CraftIcon
      );
      //  && helper(self.id).decendants().length === 0
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
