import React from "react";

export type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export const Icon = React.forwardRef((props: IconProps, ref: any) => (
  <i ref={ref} {...props}></i>
));
