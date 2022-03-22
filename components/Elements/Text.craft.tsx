import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Text, TextProps } from "./Core/Text";
import { TextSettings } from "../Builder/toolbar/TextSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftText: UserComponent<TextProps> = (props) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Text
      ref={connect}
      {...props}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
    />
  );
};

CraftText.craft = {
  displayName: "Text",
  props: {
    type: "h2",
    className: "text-lg bold outline-none",
    text: "Lorem ipsum dolor sit amit",
  },
  related: {
    toolbar: TextSettings,
  },
};
