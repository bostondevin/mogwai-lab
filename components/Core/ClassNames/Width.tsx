import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Width = (props: Partial<ClassNamesProps>) => {
  return <div>Width: {props.className}</div>;
};
