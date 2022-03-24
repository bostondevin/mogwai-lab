import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Rounded = (props: Partial<ClassNamesProps>) => {
  return <div>Rounded: {props.className}</div>;
};
