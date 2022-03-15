export type InputType =
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

export type InputProps = {
  id?: string;
  name?: string;
  labelledby?: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
