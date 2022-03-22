interface OptionProps {
  label?: string;
  value?: string;
}

type OptionsProps = {
  items: OptionProps[];
};

export const Options = (props: Partial<OptionsProps>) => {
  return (
    <>
      {props.items.map((item: OptionProps) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </>
  );
};
