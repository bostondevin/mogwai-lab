import React from "react";
import { Select } from "../Core/Select";
import { Input } from "../Core/Input";
import { InputWrapper } from "components/Core/InputWrapper";

export const DataForm = ({ dataProps, predicates }) => {
  const addDataItem = (e) => {
    console.log(e);
  };
  const submitAddForm = (e) => {
    console.log(e);
  };

  return (
    <div className="flex w-full text-xs gap-2 flex-col">
      <form onSubmit={submitAddForm}>
        <div className="flex w-full gap-1 mb-2">
          <div className="flex pl-2">
            <Select
              items={predicates}
              placeholder="- Choose -"
              tight={true}
            ></Select>
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

      {dataProps &&
        Object.keys(dataProps).map((key, index) => {
          return (
            <div key={index} className="flex w-full gap-1 mb-2">
              <div className="flex pl-2">{predicates[key].label}:</div>
              <div className="flex break-all pr-2 pb-2">{dataProps[key]}</div>
            </div>
          );
        })}
    </div>
  );
};
