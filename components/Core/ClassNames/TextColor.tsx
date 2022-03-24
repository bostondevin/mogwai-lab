import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const TextColor = (props: Partial<ClassNamesProps>) => {
  return <div>TextColor: {props.className}</div>;
};
