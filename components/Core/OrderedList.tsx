import React from "react";
import { ContainerProps } from "../common.interface";

export const OrderedList = React.forwardRef(
  (props: ContainerProps, ref: any) => (
    <ol ref={ref} className={props.className} style={props.style}>
      {props.children}
    </ol>
  )
);
