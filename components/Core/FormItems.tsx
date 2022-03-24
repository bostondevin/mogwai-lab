import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Text } from "./Text";

import { FieldControl } from "react-reactive-form";

export const FormItems = (props) => {
  const inputComponents = {
    Select: Select,
    Input: Input,
    Textarea: Textarea,
  };

  return (
    <>
      {props.data &&
        Object.keys(props.data).map((key, index) => {
          return (
            <div key={index} className={props.className}>
              <Text
                className={props.labelClassName}
                type="label"
                text={props.data[key].props.label}
              />
              <FieldControl
                name={key}
                render={inputComponents[props.data[key].type]}
                meta={props.data[key].props}
              />
            </div>
          );
        })}

      {!props.data && "No data"}
    </>
  );
};

/*
{props.data &&
              Object.keys(props.data).map((key, index) => {
                return (
                  <>
                    {props.predicates[key].type === "Classnames" && (
                      <ClassNames className={props.data[key]} />
                    )}

                    {props.predicates[key].type !== "classes" && (
                      <div key={index} className="flex w-full gap-1 mb-2">
                        <Text
                          className="flex pl-2"
                          id={key}
                          type="label"
                          text={props.predicates[key].label}
                        />
                        <div className="flex break-all pr-2 pb-2 w-full">
                          <FieldControl
                            name={key}
                            render={inputComponents[props.predicates[key].type]}
                            meta={props.predicates[key].props}
                          />
                        </div>
                      </div>
                    )}
                  </>
                );
              })}

              */
