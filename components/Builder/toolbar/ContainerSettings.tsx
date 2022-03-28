import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Textarea } from "../../Core/Textarea";
import { Input } from "../../Core/Input";
import { Select } from "../../Core/Select";
import { FormGenerator, Validators } from "react-reactive-form";
import {
  outerClassName,
  labelClassName,
  saveFormChanges,
  tailwindFormConfig,
  ContainerTypes,
  inputClassName,
} from "../../common.interface";

export const ContainerSettings = () => {
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
        render: Select,
        meta: {
          items: ContainerTypes,
          label: "Container Type",
          tight: true,
          className: outerClassName,
          labelClassName: labelClassName,
          inputClassName: inputClassName,
        },
      },

      "aria-label": {
        render: Input,
        meta: {
          label: "Aria label",
          tight: true,
          className: outerClassName,
          labelClassName: labelClassName,
        },
      },
    },
    {
      Select: Select,
      Input: Input,
      Textarea: Textarea,
    },
    propValue
  );

  return (
    <Form onSubmit={submitForm} className="grid grid-cols-2 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
