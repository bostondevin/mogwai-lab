import React from "react";
import { AbstractControl } from "react-reactive-form";
import { regularInputClasses, smallInputClasses } from "../common.interface";
import { Text } from "./Text";
import { Options } from "./Options";

export const Input = ({ handler, meta }: AbstractControl) => {
  const clickButton = (e) => {
    meta.onClick(e);
  };

  return (
    <div className={meta.className}>
      <Text className={meta.labelClassName} text={meta.label} type="label" />
      <div className={meta.inputClassName}>
        {meta.type !== "textarea" && meta.type !== "select" && (
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
        )}

        {meta.type === "textarea" && (
          <textarea
            placeholder={meta.placeholder}
            rows={meta.rows}
            className={
              meta.tight
                ? smallInputClasses + " pl-2 pr-6"
                : regularInputClasses + " pl-3 pr-6"
            }
            {...handler()}
          ></textarea>
        )}

        {meta.type === "select" && (
          <>
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
            <button
              className={
                meta.tight
                  ? "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-8"
                  : "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none h-10"
              }
            >
              <i className="fa-solid fa-chevron-down" />
            </button>
          </>
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
