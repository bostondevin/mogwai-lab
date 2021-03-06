import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftIcon } from "./Icon.craft";
import { CraftText } from "./Text.craft";
import NextLink from "next/link";

import { ButtonSettings } from "../Builder/settings/ButtonSettings";

import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/settings/craft.utils";

import { ButtonProps } from "../common.interface";

export const CraftButton: UserComponent<ButtonProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "button" && (
        <button
          ref={connect}
          type={props.type}
          className={props.className}
          style={props.style}
          disabled={props.disabled}
        >
          {props.children}

          {!props.children && enabled && (
            <span
              className={emptyContainerClass}
              style={{ minHeight: "24px" }}
            ></span>
          )}
        </button>
      )}
      {props.type === "a" && (
        <NextLink href={props.href}>
          <a
            ref={connect}
            onClick={() => props.onClick}
            className={props.className}
            arial-label={props["aria-label"] ? props["aria-label"] : undefined}
          >
            {props.children}

            {!props.children && enabled && (
              <span
                className={emptyContainerClass}
                style={{ minHeight: "24px" }}
              ></span>
            )}
          </a>
        </NextLink>
      )}
    </>
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
      //  && helper(self.id).decendants().length === 0
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
