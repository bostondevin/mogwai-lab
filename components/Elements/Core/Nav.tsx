import React from "react";
import { CommonContainerProps } from "../../../interfaces/common.interface";

export const Nav = React.forwardRef((props: CommonContainerProps, ref: any) => (
  <nav ref={ref} {...props}>
    {props.children}
  </nav>
));
