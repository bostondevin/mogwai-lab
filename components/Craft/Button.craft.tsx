import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftIcon } from "./Icon.craft";
import { CraftText } from "./Text.craft";

import { Button } from "../Core/Button";
import { Link, LinkProps } from "../Core/Link";
import { ButtonSettings } from "../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

import { ButtonProps } from "../common.interface";

export const CraftButton: UserComponent<ButtonProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "button" && (
        <Button ref={connect} {...props} disabled={enabled}>
          {props.children}
        </Button>
      )}
      {props.type === "a" && (
        <Link ref={connect} {...props} disabled={enabled}>
          {props.children}
        </Link>
      )}
    </>
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
