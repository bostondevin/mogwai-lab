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
      <option>{props.placeholder ? props.placeholder : " "}</option>

      {props.items &&
        Object.keys(props.items).map((key, index) => {
          return (
            <option key={index} value={key}>
              {props.items[key].label}
            </option>
          );
        })}
    </>
  );
};
