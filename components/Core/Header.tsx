import React from "react";
import { CommonContainerProps } from "../common.interface";

export const Header = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <header ref={ref} {...props}>
      {props.children}
    </header>
  )
);
