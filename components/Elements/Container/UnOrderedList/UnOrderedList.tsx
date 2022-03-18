import React from "react";
import { CommonContainerProps } from "../../../../interfaces/Container.interface";

export const UnOrderedList = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <ul ref={ref} className={props.className} style={props.style}>
      {props.children}
    </ul>
  )
);
