import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Border = (props: Partial<ClassNamesProps>) => {
  return <div>Border: {props.className}</div>;
};
