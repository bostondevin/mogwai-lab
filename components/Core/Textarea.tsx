import React from "react";
import {
  TextareaProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

export const Textarea = React.forwardRef((props: TextareaProps, ref: any) => (
  <textarea
    ref={ref}
    {...props}
    className={
      props.tight ? smallInputClasses + " p-1" : regularInputClasses + " p-2"
    }
    onChange={props.onChange}
  >
    {props.value}
  </textarea>
));
