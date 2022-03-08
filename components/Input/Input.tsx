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

export type InputProps = {
  id?: string;
  type: InputType;
  className?: string;
  onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: Partial<InputProps>) => {
  return (
    <input
      {...props}
      id={props.id}
      type={props.type}
      className={props.className}
      onFocus={(e) => props.onFocus(e)}
      onInput={(e) => props.onChange(e)}
    />
  );
};
