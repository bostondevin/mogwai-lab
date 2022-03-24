import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { FormItems } from "../../Core/FormItems";
import { TailwindClasses } from "../../common.interface";

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const changeDataItem = (e) => {
    console.log(e);
  };

  return (
    <Form onChange={changeDataItem} className="grid grid-cols-2 gap-2 p-2">
      <FormItems
        data={TailwindClasses}
        className="flex w-full gap mb-2 flex-col"
        labelClassName="flex text-xs opacity-50"
      />
    </Form>
  );
};
