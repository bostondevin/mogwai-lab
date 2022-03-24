import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Text } from "./Text";
import { ClassNames } from "./ClassNames/ClassNames";
import { InputWrapper } from "components/Core/InputWrapper";
import lz from "lzutf8";

export const DataForm = (props) => {
  const addDataItem = (e) => {
    console.log(e);
  };
  const submitAddForm = (e) => {
    console.log(e);
  };

  const formatHtmlData = (key) => {
    if (key === "html") {
      const json = lz.decompress(
        lz.decodeBase64(decodeURIComponent(props.data[key]))
      );
      return json;
    } else {
      return props.data[key];
    }
  };

  const changeData = (e, k) => {
    props.onChange({ key: k, value: e.target.value });
  };

  return (
    <div className="flex w-full text-xs gap-2 flex-col">
      <form onSubmit={submitAddForm} className="hidden">
        <div className="flex w-full gap-1 mb-2">
          <div className="flex pl-2">
            <Select items={props.predicates} tight={true}></Select>
          </div>
          <div className="flex break-all pr-2 pb-2">
            <InputWrapper
              buttonIcon="fa fa-plus"
              buttonType="submit"
              onClick={addDataItem}
            >
              <Input type="text" placeholder="Enter a thing" tight={true} />
            </InputWrapper>
          </div>
        </div>
      </form>

      {props.data &&
        Object.keys(props.data).map((key, index) => {
          return (
            <>
              {props.predicates[key].type === "classes" && (
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
                    {props.predicates[key].type === "text" && (
                      <Input
                        type="text"
                        value={props.data[key]}
                        tight={true}
                        aria-labeled-by={key}
                        onChange={(e) => changeData(e, key)}
                      />
                    )}
                    {props.predicates[key].type === "textarea" && (
                      <Textarea
                        value={formatHtmlData(key)}
                        rows={5}
                        tight={true}
                        aria-labeled-by={key}
                        onChange={(e) => changeData(e, key)}
                      />
                    )}
                    {props.predicates[key].type === "select" && (
                      <Select
                        value={props.data[key]}
                        tight={true}
                        aria-labeled-by={key}
                        onChange={(e) => changeData(e, key)}
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};
