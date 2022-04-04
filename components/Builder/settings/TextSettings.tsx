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
  inputClassName,
  TextTypes,
  formClasses,
} from "../../common.interface";

export const TextSettings = () => {
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
        type: "Input",
        meta: {
          type: "select",
          items: TextTypes,
          label: "Text Type",

          className: outerClassName,
          labelClassName: labelClassName,
          inputClassName: inputClassName,
        },
      },
      text: {
        type: "Input",
        meta: {
          type: "textarea",
          label: "Text",

          className: outerClassName,
          labelClassName: labelClassName,
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
