import React from "react";
import { AbstractControl } from "react-reactive-form";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { InputSettings } from "../Builder/settings/InputSettings";
import { InputProps } from "../common.interface";
import { regularInputClasses, smallInputClasses } from "../common.interface";

import { nodeHook, editorHook } from "../Builder/settings/craft.utils";

export const CraftInput: UserComponent<InputProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type !== "textarea" && props.type !== "select" && (
        <input
          ref={connect}
          {...props}
          className={props.className}
          readOnly={enabled}
        />
      )}
      {props.type === "textarea" && (
        <textarea
          ref={connect}
          className={props.className}
          readOnly={enabled}
        ></textarea>
      )}
      {props.type === "select" && (
        <select
          ref={connect}
          name={props.name}
          id={props.id}
          disabled={enabled}
          className={props.className}
        >
          <option>DDDDD</option>
          <option>DDDDD</option>
          <option>DDDDD</option>
        </select>
      )}
    </>
  );
};

CraftInput.craft = {
  displayName: "Input",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: InputSettings,
  },
};
