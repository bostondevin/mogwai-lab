import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { FormItems } from "../../Core/FormItems";
import { predicates } from "../../components";

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

  const schema = {};

  return (
    <Form onChange={changeDataItem}>
      <FormItems data={predicates} />
    </Form>
  );
};
