import React from "react";
import { ContainerProps } from "../../../interfaces/Container.interface";

export interface FormProps extends ContainerProps {
  onClick?: (event: React.MouseEvent<HTMLFormElement>) => void;
  onPointerOver?: (event: React.MouseEvent<HTMLFormElement>) => void;
  onPointerOut?: (event: React.MouseEvent<HTMLFormElement>) => void;
  onSubmit?: (event: React.MouseEvent<HTMLFormElement>) => void;
}

export const Form = React.forwardRef((props: FormProps, ref: any) => (
  <form ref={ref} {...props}>
    {props.children}
  </form>
));
