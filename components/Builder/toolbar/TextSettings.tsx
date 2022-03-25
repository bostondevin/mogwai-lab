import React from "react";
import { useNode } from "@craftjs/core";
import { Form } from "../../Core/Form";
import { Textarea } from "../../Core/Textarea";
import { Input } from "../../Core/Input";
import { Select } from "../../Core/Select";
import { FormGenerator, Validators, FormBuilder } from "react-reactive-form";
import {
  textClasses,
  boxClasses,
  outerClassName,
  labelClassName,
  getClassNames,
} from "../../common.interface";

export const TextSettings = () => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const formatColorProp = (prop, newClasses) => {
    if (prop + "-color" in newClasses) {
      if (prop + "-intensity" in newClasses) {
        newClasses[prop + "-color"] =
          newClasses[prop + "-color"] + "-" + newClasses[prop + "-intensity"];
        delete newClasses[prop + "-intensity"];
      }
      if (prop + "-opacity" in newClasses) {
        newClasses[prop + "-color"] =
          newClasses[prop + "-color"] + "/" + newClasses[prop + "-opacity"];
        delete newClasses[prop + "-opacity"];
      }
    } else {
      delete newClasses[prop + "-opacity"];
      delete newClasses[prop + "-intensity"];
    }
  };

  const mountForm = (f) => {
    f.valueChanges.subscribe((value) => {
      let newClasses = {};

      Object.keys(value).forEach((key) => {
        if (key.indexOf("className:") !== 0) {
          //console.log(key);
          setProp((props) => (props[key] = value[key]), 100);
        } else {
          if (value[key])
            newClasses[key.replace("className:", "")] = value[key];
        }
      });

      formatColorProp("text", newClasses);
      formatColorProp("bg", newClasses);

      console.log(newClasses);

      const arr = [];

      Object.keys(newClasses).forEach((key) => {
        if (key.indexOf("-") > -1) {
          arr.push(key.split("-")[0] + "-" + newClasses[key]);
        } else {
          arr.push(key + "-" + newClasses[key]);
        }
      });

      console.log(arr);
      setProp((props) => (props.className = arr.join(" ")), 100);
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

  Object.keys(textClasses).forEach((d) => {
    textClasses[d].render = o[textClasses[d].type];
  });

  const config = {
    controls: { ...customItems, ...textClasses },
  };

  Object.keys(propValue).forEach((key) => {
    if (key in config.controls) {
      if (key === "classNames") {
        propValue[key].split(" ").forEach((k) => {
          console.log("classNames:" + k);
          // config.controls['classNames:' + k].formState = "";
        });
      }
      config.controls[key].formState = propValue[key]; // ["", Validators.required],
    }
  });

  return (
    <Form onSubmit={submitForm} className="grid grid-cols-2 gap-2 p-2">
      <FormGenerator onMount={mountForm} fieldConfig={config} />
    </Form>
  );
};
