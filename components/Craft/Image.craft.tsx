import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Image, ImageProps } from "../Core/Image";
import { ButtonSettings } from "../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftImage: UserComponent<ImageProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Image ref={connect} {...props} />;
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
