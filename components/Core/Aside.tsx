import React from "react";
import { CommonContainerProps } from "../common.interface";

export const Aside = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <aside ref={ref} {...props}>
      {props.children}
    </aside>
  )
);
