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
      "className:fa": {
        type: Input,
        meta: {
          type: "select",
          items: tailwindSchema.fa,
          label: "Icon StyleZZZ",
          tight: true,
          className: outerClassName,
          labelClassName: labelClassName,
          inputClassName: inputClassName,
        },
      },

      "className:bbb": {
        type: Input,
        meta: {
          type: "select",
          items: icons,
          label: "Icon",
          tight: true,
          className: outerClassName,
          labelClassName: labelClassName,
          inputClassName: inputClassName,
        },
      },
      /*
      text: {
        render: Input,
        meta: {
          type: "textarea",
          label: "Aria label",
          tight: true,
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
    <Form onSubmit={submitForm} className="grid grid-cols-3 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
