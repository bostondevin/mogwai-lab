import React from "react";
import { CommonInputProps } from "../../interfaces/Container.interface";

export interface TextareaProps extends CommonInputProps {
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

export const Textarea = React.forwardRef((props: TextareaProps, ref: any) => (
  <textarea
    ref={ref}
    className={props.className}
    style={props.style}
    rows={props.rows}
    cols={props.cols}
  >
    {props.value}
  </textarea>
));
