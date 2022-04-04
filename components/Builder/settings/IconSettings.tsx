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
  tailwindSchema,
  formClasses,
} from "../../common.interface";

import { icons } from "../../fa-solid";

export const IconSettings = () => {
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
      "className:icon": {
        type: "Input",
        meta: {
          type: "select",
          items: icons,
          label: "Icon",
        },
      },

      "className:fa": {
        type: "Input",
        meta: {
          type: "select",
          items: tailwindSchema.fa,
          label: "Icon Style",
        },
      },

      /*
      text: {
        render: Input,
        meta: {
          type: "textarea",
          label: "Aria label",
          
          className: outerClassName,
          labelClassName: labelClassName,
        },
      },
      */
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
