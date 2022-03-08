import { UserComponent, useNode } from "@craftjs/core";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { ButtonConfig } from "./ButtonConfig";
import { ButtonProps } from "./_raw/ButtonProps";

export const Button: UserComponent<ButtonProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <>
      {props.tooltip ? (
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
      ) : (
        <button
          ref={connect}
          type={props.type}
          className={props.className}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </>
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
