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

export const Input: UserComponent<InputProps> = (props: any) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <>
      <input
        ref={connect}
        {...props}
        id={props.id}
        list={props.id + "_list"}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        aria-labelledby={props.labelledby}
        className={props.className}
        readOnly={enabled ? true : props.readOnly}
        disabled={props.disabled}
        onFocus={props.onFocus}
        onInput={props.onChange}
      />
      <datalist id={props.id + "_list"}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
      </datalist>
    </>
  );
};
