import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Shadow = (props: Partial<ClassNamesProps>) => {
  return <div>Shadow: {props.className}</div>;
};
