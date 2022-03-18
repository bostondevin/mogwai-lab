import React from "react";
import { CommonContainerProps } from "../../interfaces/Container.interface";

export const Footer = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <footer ref={ref} {...props}>
      {props.children}
    </footer>
  )
);
