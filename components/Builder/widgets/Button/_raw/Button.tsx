import { Tooltip } from "@material-ui/core";
import { ButtonProps } from "./ButtonProps";

export const Button = (props: ButtonProps) => {
  return (
    <Tooltip title={props.tooltip} placement={props.placement}>
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Tooltip>
  );
};
