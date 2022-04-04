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
  formClasses,
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
        },
      },
      /*
      label: {
        render: Input,
        meta: {
          type: "text",
          label: "Label",
          
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
