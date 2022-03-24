import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Margin = (props: Partial<ClassNamesProps>) => {
  return <div>Margin: {props.className}</div>;
};
