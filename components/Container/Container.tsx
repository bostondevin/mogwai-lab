import React from "react";
import { ContainerSettings } from "./ContainerSettings";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Container: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      ref={connect}
      className={enabled ? props.className + " outline-1" : props.className}
      style={props.children ? undefined : { height: "50px" }}
    >
      {props.children}
      {props.children ? (
        ""
      ) : (
        <div className="border-dashed border-2 border-black/20 h-full"></div>
      )}
    </div>
  );
};

Container.craft = {
  displayName: "Container",
  props: {
    className: "",
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
