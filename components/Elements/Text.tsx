import { UserComponent, useNode, useEditor } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "small"
  | "legend"
  | "label";

/* eslint-disable-next-line */
interface TextProps {
  type: TextType;
  text?: string;
  id?: string;
  className?: string;
  //  children?: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined
}

export const Text: UserComponent<TextProps> = (props) => {
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
      id={props.id}
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

const TextSettings = () => {
  return <React.Fragment></React.Fragment>;
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
