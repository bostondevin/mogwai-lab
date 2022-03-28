import React from "react";

import { FieldGroup, AbstractControl } from "react-reactive-form";

export const Form = (props) => {
  const submitForm = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <FieldGroup
      render={({ value }: AbstractControl) => (
        <form
          onSubmit={(e) => submitForm(e, value)}
          className={props.className}
        >
          {props.children}
        </form>
      )}
    />
  );
};
