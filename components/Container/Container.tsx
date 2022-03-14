import React from "react";
import { ContainerSettings } from "./ContainerSettings";
import { UserComponent, useNode } from "@craftjs/core";

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

  return (
    <div
      ref={connect}
      className={props.className}
      style={
        props.children
          ? undefined
          : {
              minHeight: "50px",
              outline: "dashed 3px rgba(0,0,0,.1)",
              margin: "10px",
            }
      }
    >
      {props.children}
    </div>
  );
};

Container.craft = {
  displayName: "Container",
  props: {
    className: "p-3",
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
