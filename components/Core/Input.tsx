import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  InputProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

export const Input = ({
  handler,
  meta: { placeholder, tight, type },
}: AbstractControl) => (
  <input
    type={type}
    placeholder={placeholder}
    className={
      tight
        ? smallInputClasses + " pl-2 pr-6 h-8"
        : regularInputClasses + " pl-3 pr-6 h-10"
    }
    {...handler()}
  />
);
