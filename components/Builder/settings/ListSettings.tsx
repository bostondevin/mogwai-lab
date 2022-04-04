import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Input } from "../../Core/Input";
import { FormGenerator, Validators } from "react-reactive-form";
import {
  outerClassName,
  labelClassName,
  saveFormChanges,
  tailwindFormConfig,
  ListTypes,
  inputClassName,
  formClasses,
} from "../../common.interface";

export const ListSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const mountForm = (f) => {
    f.valueChanges.subscribe((value) => saveFormChanges(value, setProp));
  };

  const submitForm = (e) => {
    console.log(e);
  };

  const config = tailwindFormConfig(
    {
      type: {
        render: Input,
        meta: {
          type: "select",
          items: ListTypes,
          label: "List Type",
        },
      },

      "aria-label": {
        render: Input,
        meta: {
          type: "text",
          label: "Aria label",
        },
      },
    },
    {
      Input: Input,
    },
    propValue
  );

  return (
    <Form onSubmit={submitForm} className={formClasses}>
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
