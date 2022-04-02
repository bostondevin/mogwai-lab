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
  InputTypes,
  inputClassName,
  tailwindClassForm,
} from "../../common.interface";

export const InputSettings = () => {
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
        render: Input,
        meta: {
          type: "select",
          items: InputTypes,
          label: "Type",
          tight: true,
          className: outerClassName,
          labelClassName: labelClassName,
          inputClassName: inputClassName,
        },
      },
      /*
      label: {
        render: Input,
        meta: {
          type: "text",
          label: "Label",
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
