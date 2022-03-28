import React from "react";
import { ContainerProps } from "../common.interface";

export const ListItem = React.forwardRef((props: ContainerProps, ref: any) => (
  <li ref={ref} {...props}>
    {props.children}
  </li>
));
