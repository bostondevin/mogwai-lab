import React from "react";
import { CommonContainerProps } from "../../../interfaces/Container.interface";

export const Header = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <header ref={ref} {...props}>
      {props.children}
    </header>
  )
);
