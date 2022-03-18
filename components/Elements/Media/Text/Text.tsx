import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

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

export interface TextProps {
  onChange?: (event: ContentEditableEvent) => void;
  type: TextType;
  text?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  //  children?: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined
}

export const Text = React.forwardRef((props: TextProps, ref: any) => (
  <ContentEditable
    innerRef={ref}
    id={props.id}
    html={props.text}
    disabled={props.disabled}
    className={props.className}
    tagName={props.type}
    onChange={props.onChange}
  />
));
