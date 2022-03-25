import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  TextareaProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";
import { Text } from "./Text";

export const Textarea = ({ handler, meta }: AbstractControl) => (
  <div className={meta.className}>
    <Text className={meta.labelClassName} text={meta.label} type="label" />
    <div className={meta.inputClassName}>
      <textarea
        placeholder={meta.placeholder}
        rows={meta.rows}
        className={
          meta.tight
            ? smallInputClasses + " pl-2 pr-6"
            : regularInputClasses + " pl-3 pr-6"
        }
        {...handler()}
      />
    </div>
  </div>
);
