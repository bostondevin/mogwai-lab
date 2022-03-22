import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerDiv } from "../Div/ContainerDiv";
import { Footer } from "./Footer";
import { CraftListItem } from "../ListItem/ListItem.craft";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

import { ContainerSettings } from "../../../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../../../Builder/toolbar/craft.utils";

export const CraftFooter: UserComponent<CommonContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Footer
      ref={connect}
      {...props}
      className={props.className + (enabled ? editorEnabledAppend : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <ContainerDiv
          className={emptyContainerClass}
          style={emptyContainerStyle}
        ></ContainerDiv>
      )}
    </Footer>
  );
};

CraftFooter.craft = {
  displayName: "Footer",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) => {
      return nodes.every((node) => node.data.type !== CraftListItem);
    },
  },
  related: {
    toolbar: ContainerSettings,
  },
};
