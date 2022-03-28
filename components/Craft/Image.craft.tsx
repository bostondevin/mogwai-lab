import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ButtonSettings } from "../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";
import { ImageProps } from "../common.interface";

export const CraftImage: UserComponent<ImageProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <picture ref={connect} className={props.className} style={props.style}>
      <img {...props} />
    </picture>
  );
};

CraftImage.craft = {
  displayName: "Image",
  props: {
    src: "/public/sei-logo.svg",
  },
  rules: {
    canDrag: () => true,
    /*
    canMoveIn: (nodes) =>
      nodes.every((node) => node.data.type === Text || node.data.type === Icon),
      */
  },
  related: {
    toolbar: ButtonSettings,
  },
};
