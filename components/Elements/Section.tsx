import React from "react";
import { CommonContainerProps } from "../../interfaces/Container.interface";

export const Article = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <article ref={ref} {...props}>
      {props.children}
    </article>
  )
);
