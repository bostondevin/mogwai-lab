import React from "react";
import { UserComponent, useNode } from "@craftjs/core";
import Tooltip from "@mui/material/Tooltip";
import { Text } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { ButtonConfig } from "./ButtonConfig";
import { ButtonProps } from "./ButtonProps";

export const Button = React.forwardRef((props: ButtonProps, ref: any) => (
  <>
    {props.tooltip ? (
      <Tooltip title={props.tooltip} placement={props.placement}>
        <button
          ref={ref}
          type={props.type ? props.type : "button"}
          className={props.className}
          onClick={props.onClick}
          onMouseDown={props.onMouseDown}
        >
          {props.children}
        </button>
      </Tooltip>
    ) : (
      <button
        ref={ref}
        type={props.type ? props.type : "button"}
        className={props.className}
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
      >
        {props.children}
      </button>
    )}
  </>
));

export const ButtonReusable: UserComponent<ButtonProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <Button ref={connect} {...props}>
      {props.children}
    </Button>
  );
};

ButtonReusable.craft = {
  displayName: "Button",
  props: {
    type: "button",
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) =>
      nodes.every((node) => node.data.type === Text || node.data.type === Icon),
  },
  related: {
    toolbar: ButtonConfig,
  },
};
