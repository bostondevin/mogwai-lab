interface OptionProps {
  label?: string;
  value?: string;
}

type OptionsProps = {
  items: OptionProps[];
  placeholder: string;
};

export const Options = (props: Partial<OptionsProps>) => {
  return (
    <>
      {props.placeholder && <option>{props.placeholder}</option>}
      {props.items.map((item: OptionProps) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </>
  );
};
