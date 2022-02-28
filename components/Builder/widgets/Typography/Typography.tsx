import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import { TextSettings } from "./TextSettings";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "legend"
  | "label";

/* eslint-disable-next-line */
export interface TextProps {
  type: TextType;
  text: string;
  className?: string;
  //  children?: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined
}

export const Text = (props: Partial<TextProps>) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ContentEditable
      innerRef={connect}
      html={props.text}
      className={props.className}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      tagName={props.type}
    />
  );
};

Text.craft = {
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
