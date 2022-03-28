import React from "react";
import { ContainerProps } from "../common.interface";

export const Aside = React.forwardRef((props: ContainerProps, ref: any) => (
  <aside ref={ref} {...props}>
    {props.children}
  </aside>
));
