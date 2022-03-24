import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Visibility = (props: Partial<ClassNamesProps>) => {
  return <div>Visibility: {props.className}</div>;
};
