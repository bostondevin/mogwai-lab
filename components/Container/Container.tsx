import React from "react";
import { ContainerSettings } from "./ContainerSettings";
import { UserComponent, useNode } from "@craftjs/core";

export type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

const defaultProps = {};

export const Container: UserComponent<ContainerProps> = (props: any) => {
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
              minHeight: "100px",
              border: "dashed 3px rgba(0,0,0,.1)",
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
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
