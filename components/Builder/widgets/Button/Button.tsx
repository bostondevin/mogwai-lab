import { UserComponent, useNode } from "@craftjs/core";
import React from "react";
import { Tooltip } from "@material-ui/core";
import { ButtonConfig } from "./ButtonConfig";
import { ButtonProps } from "./_raw/ButtonProps";

export const Button: UserComponent<ButtonProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <Tooltip title={props.tooltip} placement={props.placement}>
      <button
        ref={connect}
        type={props.type}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Tooltip>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    type: "button",
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  related: {
    toolbar: ButtonConfig,
  },
};
