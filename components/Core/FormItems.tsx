import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Text } from "./Text";

import { FieldControl, FormGenerator } from "react-reactive-form";

export const FormItems = (props) => {
  const inputComponents = {
    Select: Select,
    Input: Input,
    Textarea: Textarea,
  };

  let f;

  const handleReset = () => {
    f.reset();
  };

  const setForm = (form) => {
    f = form;
    f.meta = {
      handleReset: handleReset,
    };
  };

  return <FormGenerator onMount={setForm} fieldConfig={props.data} />;
};
