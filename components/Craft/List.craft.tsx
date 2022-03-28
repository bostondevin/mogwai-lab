import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ListItem } from "../Core/ListItem";
import { CraftListItem } from "./ListItem.craft";
import { OrderedList } from "../Core/OrderedList";
import { UnOrderedList } from "../Core/UnOrderedList";
import { ListProps } from "../common.interface";

import { ListSettings } from "../Builder/toolbar/ListSettings";

import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftList: UserComponent<ListProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "ol" && (
        <OrderedList
          ref={connect}
          {...props}
          className={
            enabled ? props.className + editorEnabledAppend : props.className
          }
        >
          {props.children}

          {!props.children && enabled && (
            <ListItem
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></ListItem>
          )}
        </OrderedList>
      )}
      {!props.type ||
        (props.type === "ul" && (
          <UnOrderedList
            ref={connect}
            {...props}
            className={
              enabled ? props.className + editorEnabledAppend : props.className
            }
          >
            {props.children}

            {!props.children && enabled && (
              <ListItem
                className={emptyContainerClass}
                style={emptyContainerStyle}
              ></ListItem>
            )}
          </UnOrderedList>
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
