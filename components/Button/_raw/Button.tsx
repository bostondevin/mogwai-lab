import { Tooltip } from "@mui/material";
import { ButtonProps } from "./ButtonProps";

export const Button = (props: ButtonProps) => {
  return (
    <>
      {props.tooltip ? (
        <Tooltip title={props.tooltip} placement={props.placement}>
          <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </Tooltip>
      ) : (
        <button
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
