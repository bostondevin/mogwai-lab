import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  TextareaProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

export const Textarea = ({
  handler,
  meta: { placeholder, tight, rows },
}: AbstractControl) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className={
      tight
        ? smallInputClasses + " pl-2 pr-6 h-8"
        : regularInputClasses + " pl-3 pr-6 h-10"
    }
    {...handler()}
  />
);
