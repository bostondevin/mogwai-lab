import React from "react";
import { ContainerProps } from "../common.interface";

export const Section = React.forwardRef((props: ContainerProps, ref: any) => (
  <section ref={ref} {...props}>
    {props.children}
  </section>
));
