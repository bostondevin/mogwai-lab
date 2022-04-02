import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { TextSettings } from "../Builder/settings/TextSettings";
import { nodeHook, editorHook } from "../Builder/settings/craft.utils";
import ContentEditable from "react-contenteditable";
import { TextProps } from "../common.interface";

export const CraftText: UserComponent<TextProps> = (props) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <ContentEditable
      innerRef={connect}
      id={props.id}
      html={props.text || ""}
      disabled={props.disabled || !enabled}
      className={props.className}
      tagName={props.type}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }}
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
