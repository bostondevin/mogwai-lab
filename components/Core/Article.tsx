import React from "react";
import { ContainerProps } from "../common.interface";

export const Article = React.forwardRef((props: ContainerProps, ref: any) => (
  <article ref={ref} {...props}>
    {props.children}
  </article>
));
