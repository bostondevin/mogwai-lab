import React from "react";
import { useNode } from "@craftjs/core";
import { DataForm } from "../../Core/DataForm";
import { predicates } from "../../../constants/components";

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
    <DataForm
      data={propValue}
      predicates={predicates}
      onChange={changeDataItem}
    />
  );
};
