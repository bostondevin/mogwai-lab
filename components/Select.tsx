import { UserComponent, useNode, useEditor } from "@craftjs/core";

type SelectProps = {
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

export const Select: UserComponent<SelectProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <>
      <select
        ref={connect}
        {...props}
        id={props.id}
        name={props.name}
        aria-labelledby={props.labelledby}
        className={props.className}
        disabled={props.disabled}
        onFocus={props.onFocus}
        onChange={props.onChange}
      >
        {props.placeholder ? <option>{props.placeholder}</option> : ""}
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
      </select>
    </>
  );
};
