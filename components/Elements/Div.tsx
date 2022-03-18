import React from "react";
import { ContainerProps } from "../../interfaces/Container.interface";

export interface DivProps extends ContainerProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onPointerOver?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onPointerOut?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Div = React.forwardRef((props: DivProps, ref: any) => (
  <div ref={ref} {...props}>
    {props.children}
  </div>
));
