import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Padding = (props: Partial<ClassNamesProps>) => {
  return <div>Padding: {props.className}</div>;
};
