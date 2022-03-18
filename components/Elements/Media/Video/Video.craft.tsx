import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Video, VideoProps } from "./Video";
import { ButtonSettings } from "../../../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftVideo: UserComponent<VideoProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <Video
      ref={connect}
      {...props}
      className={props.className + (enabled ? " pointer-events-none" : "")}
    />
  );
};

CraftVideo.craft = {
  displayName: "Video",
  props: {
    className: "",
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
