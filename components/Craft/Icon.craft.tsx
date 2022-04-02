import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { IconSettings } from "../Builder/settings/IconSettings";
import { nodeHook, editorHook } from "../Builder/settings/craft.utils";
import { IconProps } from "../common.interface";

export const CraftIcon: UserComponent<IconProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  const filteredClasses = props.className
    .split(" ")
    .map((d) => d.replace("icon-", ""));

  return (
    <i
      ref={connect}
      style={props.style}
      className={filteredClasses.join(" ")}
    />
  );
};

CraftIcon.craft = {
  displayName: "Icon",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: IconSettings,
  },
};
