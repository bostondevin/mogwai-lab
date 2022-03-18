import React from "react";

export type SelectProps = {
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  name?: string;
  labelledby?: string;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export const Select = React.forwardRef((props: SelectProps, ref: any) => (
  <select ref={ref} {...props}>
    {props.placeholder ? <option>{props.placeholder}</option> : ""}
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
  </select>
));
