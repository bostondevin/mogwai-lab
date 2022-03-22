import React from "react";
import { ContainerProps, CommonEvents } from "../common.interface";

export interface MainProps extends ContainerProps, CommonEvents {}

export const Main = React.forwardRef((props: MainProps, ref: any) => (
  <main ref={ref} {...props}>
    {props.children}
  </main>
));
