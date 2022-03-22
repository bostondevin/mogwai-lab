import React from "react";
import { CommonContainerProps } from "../../../interfaces/common.interface";

export const ListItem = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <li ref={ref} {...props}>
      {props.children}
    </li>
  )
);
