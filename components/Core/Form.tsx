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

/*
      <FieldGroup
        render={({ value }: AbstractControl) => (
          <form onSubmit={(e) => submitAddForm(e, value)}>
            <div className="flex w-full gap-1 mb-2">
              <div className="flex pl-2">
                <FieldControl
                  name="predicate"
                  render={Select}
                  meta={{
                    label: "First Name",
                    placeholder: "Enter first name",
                    tight: true,
                    items: props.predicates,
                  }}
                />
              </div>
              <div className="flex break-all pr-2 pb-2">
                <InputWrapper
                  buttonIcon="fa fa-plus"
                  buttonType="submit"
                  onClick={addDataItem}
                >
                  <FieldControl
                    name="text"
                    render={Input}
                    meta={{
                      type: "text",
                      label: "First Name",
                      placeholder: "Enter a thing",
                      tight: true,
                    }}
                  />
                </InputWrapper>
              </div>
            </div>
          </form>
        )}
      />

*/
