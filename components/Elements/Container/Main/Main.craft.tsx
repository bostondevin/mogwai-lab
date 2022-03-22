import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerDiv } from "../Div/ContainerDiv";
import { Main } from "./Main";
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

export const CraftMain: UserComponent<CommonContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Main
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
    </Main>
  );
};

CraftMain.craft = {
  displayName: "Main",
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
