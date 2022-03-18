import React from "react";
import { CommonInputProps } from "../../../../interfaces/Container.interface";

type InputType =
  | "text"
  | "number"
  | "tel"
  | "email"
  | "date"
  | "datetime-local"
  | "time"
  | "checkbox"
  | "radio"
  | "range"
  | "file";

export interface InputProps extends CommonInputProps {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: InputType;
}

export const Input = React.forwardRef((props: InputProps, ref: any) => (
  <>
    <input ref={ref} {...props} />
    <datalist id={props.id + "_list"}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
      <option value="6">Option 6</option>
    </datalist>
  </>
));
