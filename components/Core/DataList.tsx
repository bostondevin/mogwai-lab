import { Options } from "./Options";
import { DataListProps } from "../common.interface";

export const DataList = (props: Partial<DataListProps>) => {
  return (
    <datalist id={props.id}>
      <Options items={props.items} />
    </datalist>
  );
};
