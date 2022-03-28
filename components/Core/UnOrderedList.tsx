import React from "react";
import { ContainerProps } from "../common.interface";

export const UnOrderedList = React.forwardRef(
  (props: ContainerProps, ref: any) => (
    <ul ref={ref} className={props.className} style={props.style}>
      {props.children}
    </ul>
  )
);
