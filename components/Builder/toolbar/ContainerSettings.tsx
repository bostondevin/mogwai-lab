import React from "react";
import { useNode } from "@craftjs/core";
import { DataForm } from "../DataForm";
import { predicates } from "../../../constants/components";

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  return <DataForm dataProps={propValue} predicates={predicates} />;
};
