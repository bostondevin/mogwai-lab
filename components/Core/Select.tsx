import React from "react";
import { AbstractControl } from "react-reactive-form";
import {
  SelectProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { Options } from "./Options";

export const Select = ({ handler, meta }: AbstractControl) => (
  <div className={meta.className}>
    <Text className={meta.labelClassName} text={meta.label} type="label" />
    <select
      {...handler()}
      className={
        meta.tight
          ? smallInputClasses + " pl-2 pr-6 h-8 cursor-pointer"
          : regularInputClasses + " pl-3 pr-6 h-10 cursor-pointer"
      }
    >
      <Options items={meta.items} placeholder={meta.placeholder} />
    </select>
    <div
      className={
        meta.tight
          ? "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-8"
          : "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-10"
      }
    >
      <Icon className="fa-solid fa-chevron-down text-sm" />
    </div>
  </div>
);
