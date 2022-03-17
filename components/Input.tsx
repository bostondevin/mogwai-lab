import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

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

type InputProps = {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  labelledby?: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export const InputRaw = React.forwardRef((props: InputProps, ref: any) => (
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
