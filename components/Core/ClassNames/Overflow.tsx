import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Overflow = (props: Partial<ClassNamesProps>) => {
  return <div>Overflow: {props.className}</div>;
};
