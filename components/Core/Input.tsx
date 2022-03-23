import React from "react";
import {
  InputProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

export const Input = React.forwardRef((props: InputProps, ref: any) => (
  <input
    ref={ref}
    {...props}
    className={
      props.tight
        ? smallInputClasses + " pl-2 pr-6 h-8"
        : regularInputClasses + " pl-3 pr-6 h-10"
    }
    onChange={props.onChange}
  />
));
