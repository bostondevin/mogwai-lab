import React from "react";
import { Select } from "../Core/Select";
import { Input } from "../Core/Input";
import { InputWrapper } from "components/Core/InputWrapper";

export const DataForm = ({ dataProps }) => {
  const addDataItem = (e) => {
    console.log(e);
  };

  return (
    <div className="flex w-full text-xs gap-2 flex-col">
      <div className="flex w-full gap-1 mb-2">
        <div className="flex pl-2">
          <Select
            items={[
              { label: "ID", value: "/predicates/id" },
              { label: "Label", value: "/predicates/label" },
              { label: "Classes", value: "/predicates/classNames" },
              { label: "HTML", value: "/predicates/html" },
            ]}
            placeholder="- Choose -"
            tight={true}
          ></Select>
        </div>
        <div className="flex break-all pr-2 pb-2">
          <InputWrapper buttonIcon="fa fa-plus" onClick={addDataItem}>
            <Input type="text" placeholder="Enter a thing" tight={true} />
          </InputWrapper>
        </div>
      </div>

      {dataProps &&
        Object.keys(dataProps).map((item, index) => {
          return (
            <div key={index} className="flex w-full gap-1 mb-2">
              <div className="flex pl-2">{item}</div>
              <div className="flex break-all pr-2 pb-2">{dataProps[item]}</div>
            </div>
          );
        })}
    </div>
  );
};
