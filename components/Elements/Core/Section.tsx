import React from "react";
import { CommonContainerProps } from "../../../interfaces/common.interface";

export const Section = React.forwardRef(
  (props: CommonContainerProps, ref: any) => (
    <section ref={ref} {...props}>
      {props.children}
    </section>
  )
);
