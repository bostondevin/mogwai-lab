import React from "react";
import { ContainerProps } from "../common.interface";

export const Fieldset = React.forwardRef((props: ContainerProps, ref: any) => (
  <fieldset ref={ref} {...props}>
    {props.children}
  </fieldset>
));
