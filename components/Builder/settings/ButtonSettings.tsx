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
  ButtonTypes,
  inputClassName,
  tailwindClassForm,
  formClasses,
} from "../../common.interface";

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const mountForm = (f) => {
    // console.log(tailwindClassForm);

    f.valueChanges.subscribe((value) => saveFormChanges(value, setProp));
  };

  const submitForm = (e) => {
    console.log(e);
  };

  const config = tailwindFormConfig(
    {
      type: {
        type: "Input",
        meta: {
          type: "select",
          items: ButtonTypes,
          label: "Type",
        },
      },

      "aria-label": {
        type: "Input",
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
