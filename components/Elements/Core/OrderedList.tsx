import React from "react";
import { CommonContainerProps } from "../../../interfaces/Container.interface";

export const OrderedList = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <ol ref={ref} className={props.className} style={props.style}>
      {props.children}
    </ol>
  )
);
