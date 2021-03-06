import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftListItem } from "./ListItem.craft";
import { ListProps } from "../common.interface";

import { ListSettings } from "../Builder/settings/ListSettings";

import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/settings/craft.utils";

export const CraftList: UserComponent<ListProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "ol" && (
        <ol
          ref={connect}
          style={props.style}
          className={
            enabled ? props.className + editorEnabledAppend : props.className
          }
        >
          {props.children}

          {!props.children && enabled && (
            <li
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></li>
          )}
        </ol>
      )}
      {!props.type ||
        (props.type === "ul" && (
          <ul
            ref={connect}
            style={props.style}
            className={
              enabled ? props.className + editorEnabledAppend : props.className
            }
          >
            {props.children}

            {!props.children && enabled && (
              <li
                className={emptyContainerClass}
                style={emptyContainerStyle}
              ></li>
            )}
          </ul>
        ))}
    </>
  );
};

CraftList.craft = {
  displayName: "Ordered List",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) => {
      return nodes.every((node) => node.data.type === CraftListItem);
    },
  },
  related: {
    toolbar: ListSettings,
  },
};
