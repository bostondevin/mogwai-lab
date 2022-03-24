import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const BackgroundColor = (props: Partial<ClassNamesProps>) => {
  return <div>BackgroundColor: {props.className}</div>;
};
