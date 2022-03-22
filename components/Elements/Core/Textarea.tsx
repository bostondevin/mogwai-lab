import React from "react";
import {
  TextareaProps,
  regularInputClasses,
  smallInputClasses,
} from "../../../interfaces/common.interface";

export const Textarea = React.forwardRef((props: TextareaProps, ref: any) => (
  <textarea
    ref={ref}
    {...props}
    className={props.tight ? smallInputClasses : regularInputClasses}
  >
    {props.value}
  </textarea>
));
