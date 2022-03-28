import React from "react";
import { ContainerProps } from "../common.interface";

export const Header = React.forwardRef((props: ContainerProps, ref: any) => (
  <header ref={ref} {...props}>
    {props.children}
  </header>
));
