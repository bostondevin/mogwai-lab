import React from "react";
import {
  ContainerProps,
  CommonEvents,
} from "../../../interfaces/Container.interface";

export interface MainProps extends ContainerProps, CommonEvents {}

export const Main = React.forwardRef((props: MainProps, ref: any) => (
  <main ref={ref} {...props}>
    {props.children}
  </main>
));
