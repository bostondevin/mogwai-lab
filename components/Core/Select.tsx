import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  SelectProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";
import { Icon } from "./Icon";

import { Options } from "./Options";

export const Select = ({
  handler,
  meta: { placeholder, tight, items, ref },
}: AbstractControl) => (
  <div ref={ref} className="relative inline-block w-full">
    <select
      {...handler()}
      className={
        tight
          ? smallInputClasses + " pl-2 pr-6 h-8 cursor-pointer"
          : regularInputClasses + " pl-3 pr-6 h-10 cursor-pointer"
      }
    >
      <Options items={items} placeholder={placeholder} />
    </select>
    <div
      className={
        tight
          ? "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-8"
          : "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-10"
      }
    >
      <Icon className="fa-solid fa-caret-down" />
    </div>
  </div>
);
