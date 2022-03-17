import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

type InputType =
  | "text"
  | "textarea"
  | "select"
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

type InputProps = {
  type: InputType;
  id?: string;
  name?: string;
  value?: string | number | boolean | undefined;
  labelledby?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  spellcheck?: boolean;
  disabled?: boolean;
  rows?: number;
  min?: number;
  max?: number;
  datalist?: [any];
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputRaw = React.forwardRef((props: InputProps, ref) => (
  <>
    {props.type === "textarea" && (
      <textarea ref={ref} {...props}>
        {props.value}
      </textarea>
    )}

    {props.type === "select" && (
      <select ref={ref} {...props}>
        {props.placeholder ? <option>{props.placeholder}</option> : ""}
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
      </select>
    )}

    {props.type !== "textarea" && props.type !== "select" && (
      <>
        <input ref={ref} {...props} />
        {props.datalist && (
          <datalist id={props.id + "_list"}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </datalist>
        )}
      </>
    )}
  </>
));

export const Input: UserComponent<InputProps> = (props) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return <InputRaw ref={connect} {...props} readOnly={enabled} />;
};
