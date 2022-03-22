import React from "react";
import {
  InputProps,
  regularInputClasses,
  smallInputClasses,
} from "../../../interfaces/Container.interface";

export const Input = React.forwardRef((props: InputProps, ref: any) => (
  <input
    ref={ref}
    {...props}
    className={props.tight ? smallInputClasses : regularInputClasses}
  />
));
