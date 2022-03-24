import React from "react";
import { ClassNamesProps } from "../../common.interface";

export const Display = (props: Partial<ClassNamesProps>) => {
  return <div>Display: {props.className}</div>;
};
