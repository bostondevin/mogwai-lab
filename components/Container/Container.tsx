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
      style={props.children ? undefined : { minHeight: "50px" }}
    >
      {props.children}

      {!props.children && enabled ? (
        <div className="border-dashed border-4 border-black/10 hover:border-black/30 h-full w-full flex"></div>
      ) : (
        <></>
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
