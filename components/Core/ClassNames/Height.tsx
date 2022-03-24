import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Height = (props: Partial<ClassNamesProps>) => {
  return <div>Height: {props.className}</div>;
};
