import { Options } from "./Options";
import { DataListProps } from "../../../interfaces/Container.interface";

export const DataList = (props: Partial<DataListProps>) => {
  return (
    <datalist id={props.id}>
      <Options items={props.items} />
    </datalist>
  );
};
