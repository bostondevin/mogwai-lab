import React from "react";
import { ContainerProps } from "../common.interface";

export const DivContainer = React.forwardRef(
  (props: ContainerProps, ref: any) => (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  )
);
