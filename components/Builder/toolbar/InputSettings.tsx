import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Textarea } from "../../Core/Textarea";
import { Input } from "../../Core/Input";
import { Select } from "../../Core/Select";
import { FormGenerator, FormBuilder, Validators } from "react-reactive-form";
import {
  textClasses,
  boxClasses,
  outerClassName,
  labelClassName,
  InputTypes,
} from "../../common.interface";

export const InputSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const fg = FormBuilder.group({
    username: ["", Validators.required],
  });

  const mountForm = (f) => {
    console.log(propValue);

    f.formState = {};

    f.valueChanges.subscribe((value) => {
      const newClassNames = Object.keys(value).reduce((acc, key) => {
        const _acc = acc;
        if (value[key] !== undefined && key.indexOf("className:") === 0)
          _acc[key] = value[key];
        return _acc;
      }, {});

      const newClassArr = [];
      Object.keys(newClassNames).forEach((d) => {
        newClassArr.push(newClassNames[d]);
      });

      setProp((props) => (props.className = newClassArr.join(" ")), 100);

      console.log(value);
    });
  };

  const submitForm = (e) => {
    console.log(e);
  };

  const customItems = {
    type: {
      type: "Select",
      meta: {
        items: InputTypes,
        label: "Type",
        tight: true,
        className: outerClassName,
        labelClassName: labelClassName,
      },
    },

    placeholder: {
      type: "Input",
      meta: {
        label: "Placeholder",
        tight: true,
        className: outerClassName,
        labelClassName: labelClassName,
      },
    },
  };

  const o = {
    Select: Select,
    Input: Input,
    Textarea: Textarea,
  };

  Object.keys(textClasses).forEach((d) => {
    textClasses[d].render = o[textClasses[d].type];
  });

  const config = {
    controls: { ...customItems, ...textClasses },
  };

  return (
    <Form onSubmit={submitForm} className="grid grid-cols-2 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
