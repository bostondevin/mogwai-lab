export type SelectProps = {
  id?: string;
  name?: string;
  labelledby?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
