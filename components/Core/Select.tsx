import React from "react";
import {
  SelectProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

import { Options } from "./Options";

export const Select = React.forwardRef((props: SelectProps, ref: any) => (
  <div className="relative inline-block w-full">
    <select
      ref={ref}
      {...props}
      onChange={props.onChange}
      className={
        props.tight
          ? smallInputClasses + " pl-2 pr-6 h-8 cursor-pointer"
          : regularInputClasses + " pl-3 pr-6 h-10 cursor-pointer"
      }
    >
      <Options items={props.items} placeholder={props.placeholder} />
    </select>
    <div
      className={
        props.tight
          ? "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-8"
          : "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-10"
      }
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
));
