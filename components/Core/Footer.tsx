import React from "react";
import { ContainerProps } from "../common.interface";

export const Footer = React.forwardRef((props: ContainerProps, ref: any) => (
  <footer ref={ref} {...props}>
    {props.children}
  </footer>
));
