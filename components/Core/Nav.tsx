import React from "react";
import { ContainerProps } from "../common.interface";

export const Nav = React.forwardRef((props: ContainerProps, ref: any) => (
  <nav ref={ref} {...props}>
    {props.children}
  </nav>
));
