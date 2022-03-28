import React from "react";
import { AbstractControl } from "react-reactive-form";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ContainerSettings } from "../Builder/settings/ContainerSettings";
import { InputProps } from "../common.interface";
import { regularInputClasses, smallInputClasses } from "../common.interface";

import { nodeHook, editorHook } from "../Builder/settings/craft.utils";

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
          <input
            {...props}
            className={props.tight ? smallInputClasses : regularInputClasses}
            readOnly={enabled}
          />
        )}
        {props.type === "textarea" && (
          <textarea
            className={props.tight ? smallInputClasses : regularInputClasses}
            readOnly={enabled}
          ></textarea>
        )}
        {props.type === "select" && (
          <select
            name={props.name}
            id={props.id}
            disabled={enabled}
            className={props.tight ? smallInputClasses : regularInputClasses}
          >
            <option>DDDDD</option>
            <option>DDDDD</option>
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
