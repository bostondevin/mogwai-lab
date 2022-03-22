import React from "react";
import { CommonContainerProps } from "../common.interface";

export const Article = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <article ref={ref} {...props}>
      {props.children}
    </article>
  )
);
