import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  InputProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";
import { Text } from "./Text";

export const Input = ({ handler, meta }: AbstractControl) => (
  <div className={meta.className}>
    <Text className={meta.labelClassName} text={meta.label} type="label" />
    <input
      type={meta.type}
      placeholder={meta.placeholder}
      className={
        meta.tight
          ? smallInputClasses + " pl-2 pr-6 h-8"
          : regularInputClasses + " pl-3 pr-6 h-10"
      }
      {...handler()}
    />
  </div>
);
