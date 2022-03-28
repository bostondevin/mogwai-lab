import React from "react";
import ContentEditable from "react-contenteditable";
import { TextProps } from "../common.interface";

export const Text = React.forwardRef((props: TextProps, ref: any) => (
  <ContentEditable
    innerRef={ref}
    id={props.id}
    html={props.text || ""}
    disabled={props.disabled}
    className={props.className}
    tagName={props.type}
    onChange={props.onChange}
  />
));
