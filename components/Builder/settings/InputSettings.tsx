import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Input } from "../../Core/Input";
import { FormGenerator, FormBuilder, Validators } from "react-reactive-form";
import {
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
      render: Input,
      meta: {
        type: "select",
        items: InputTypes,
        label: "Type",
        tight: true,
        className: outerClassName,
        labelClassName: labelClassName,
      },
    },

    placeholder: {
      render: Input,
      meta: {
        type: "text",
        label: "Placeholder",
        tight: true,
        className: outerClassName,
        labelClassName: labelClassName,
      },
    },
  };

  const config = {
    controls: customItems,
  };

  return (
    <Form onSubmit={submitForm} className="grid grid-cols-2 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
