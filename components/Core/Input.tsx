import React from "react";
import { AbstractControl } from "react-reactive-form";
import { regularInputClasses, smallInputClasses } from "../common.interface";
import { Text } from "./Text";
import { Options } from "./Options";

export const Input = ({
  handler,
  meta,
  touched,
  hasError,
}: AbstractControl) => {
  const clickButton = (e) => {
    meta.onClick(e);
  };

  return (
    <div className={meta.className}>
      <Text className={meta.labelClassName} text={meta.label} type="label" />
      <span>
        {touched && hasError("required") && meta.label + " is required"}
      </span>
      <div className={meta.inputClassName}>
        {meta.type !== "textarea" && meta.type !== "select" && (
          <input
            type={meta.type}
            placeholder={meta.placeholder}
            className="bg-transparent w-full h-full outline-none"
            {...handler()}
          />
        )}

        {meta.type === "textarea" && (
          <textarea
            placeholder={meta.placeholder}
            rows={meta.rows}
            className="bg-transparent w-full h-full outline-none"
            {...handler()}
          ></textarea>
        )}

        {meta.type === "select" && (
          <select
            {...handler()}
            className="bg-transparent w-full h-full outline-none"
          >
            <Options items={meta.items} placeholder={meta.placeholder} />
          </select>
        )}

        {meta.buttonIcon && (
          <button
            onClick={clickButton}
            type={meta.buttonType}
            className="absolute inset-y-0 right-0 flex items-center px-2 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
          >
            <i className={meta.buttonIcon} />
          </button>
        )}
      </div>
    </div>
  );
};

/*
            className={
              meta.tight
                ? smallInputClasses + " pl-2 pr-6 h-8"
                : regularInputClasses + " pl-3 pr-6 h-10"


                <button
              className={
                meta.tight
                  ? "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-8"
                  : "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-10"
              }
            >
              <i className="fa-solid fa-chevron-down" />
            </button>

                */
