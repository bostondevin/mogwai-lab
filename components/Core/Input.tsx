import React from "react";
import { AbstractControl } from "react-reactive-form";
import { Button } from "./Button";
import {
  InputProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";
import { Text } from "./Text";

export const Input = ({ handler, meta }: AbstractControl) => {
  const clickButton = (e) => {
    meta.onClick(e);
  };

  return (
    <div className={meta.className}>
      <Text className={meta.labelClassName} text={meta.label} type="label" />
      <div className={meta.inputClassName}>
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
        {meta.buttonIcon && (
          <Button
            onClick={clickButton}
            type={meta.buttonType}
            className="absolute inset-y-0 right-0 flex items-center px-2 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
          >
            <i className={meta.buttonIcon} />
          </Button>
        )}
      </div>
    </div>
  );
};
