import React from "react";
import { CommonContainerProps } from "../common.interface";

export const Footer = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <footer ref={ref} {...props}>
      {props.children}
    </footer>
  )
);
