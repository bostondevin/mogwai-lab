import React from "react";
import { AbstractControl } from "react-reactive-form";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Input } from "../Core/Input";
import { Select } from "../Core/Select";
import { Textarea } from "../Core/Textarea";
import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import { InputProps } from "../common.interface";
import {
  TextareaProps,
  regularInputClasses,
  smallInputClasses,
} from "../common.interface";

import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftInput: UserComponent<InputProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <div className={props.className} ref={connect}>
      <label className={props.labelClassName}>{props.label}</label>
      <div className={props.inputClassName}>
        {props.type !== "textarea" && props.type !== "select" && (
          <input {...props} readOnly={enabled} />
        )}
        {props.type === "textarea" && (
          <textarea className={props.inputClassName}></textarea>
        )}
        {props.type === "select" && (
          <select name={props.name} id={props.id} disabled={enabled}>
            <option>DDDDD</option>
          </select>
        )}
      </div>
    </div>
  );
};

CraftInput.craft = {
  displayName: "Input",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
