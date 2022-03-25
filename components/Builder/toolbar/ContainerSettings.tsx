import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Textarea } from "../../Core/Textarea";
import { Input } from "../../Core/Input";
import { Select } from "../../Core/Select";
import { FormGenerator, Validators } from "react-reactive-form";
import {
  textClasses,
  boxClasses,
  outerClassName,
  labelClassName,
} from "../../common.interface";

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const mountForm = (f) => {
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

      setProp((props) => (props.className = newClassArr.join(" ")), 500);

      console.log(value);
    });
  };

  const submitForm = (e) => {
    console.log(e);
  };

  const customItems = {
    text: {
      render: Textarea,
      meta: {
        label: "Text",
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

  Object.keys(boxClasses).forEach((d) => {
    boxClasses[d].render = o[boxClasses[d].type];
  });

  const config = {
    controls: { ...customItems, ...boxClasses },
  };

  return (
    <Form onSubmit={submitForm} className="grid grid-cols-2 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
