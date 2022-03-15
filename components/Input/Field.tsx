import { Element, useNode } from "@craftjs/core";
import React from "react";

import { Container } from "../Container/Container";
import { Text } from "../Typography/Typography";
import { Input } from "./Input";
import { InputType } from "./InputProps";

export type FieldProps = {
  id?: string;
  name?: string;
  labelledby?: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Field: UserComponent<FieldProps> = (props: any) => {
  return (
    <Container className="mb-3">
      <Element
        canvas
        is={Text}
        id="text-input"
        type="label"
        text="I am a label!!!"
        className="block text-sm text-black opacity-50 dark:text-white"
      />
      <Element
        canvas
        id="input-1"
        is={Input}
        labelledby="text-input"
        placeholder="Here's a placeholder"
        type="text"
        name="text-input"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
    </Container>
  );
};

Field.craft = {
  ...Container.craft,
  displayName: "Text Field",
};
