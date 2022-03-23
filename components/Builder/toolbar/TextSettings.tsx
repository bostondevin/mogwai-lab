import React from "react";
import { useNode } from "@craftjs/core";

export const TextSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  return <React.Fragment>Hosere: {JSON.stringify(propValue)}</React.Fragment>;
};
