import React from "react";

type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  style?: string;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | boolean
    | null
    | undefined;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      className={props.className + (props.disabled ? " opacity-50" : "")}
      aria-label={props.ariaLabel || undefined}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
