import React from "react";
import { ContainerProps } from "../../../interfaces/Container.interface";

export interface FieldsetProps extends ContainerProps {
  onClick?: (event: React.MouseEvent<HTMLFieldSetElement>) => void;
  onPointerOver?: (event: React.MouseEvent<HTMLFieldSetElement>) => void;
  onPointerOut?: (event: React.MouseEvent<HTMLFieldSetElement>) => void;
}

export const Fieldset = React.forwardRef((props: FieldsetProps, ref: any) => (
  <fieldset ref={ref} {...props}>
    {props.children}
  </fieldset>
));
