import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

export type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export const IconRaw = React.forwardRef((props: IconProps, ref: any) => (
  <i ref={ref} {...props}></i>
));

export const Icon: UserComponent<IconProps> = (props) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return <IconRaw ref={connect} {...props} />;
};
