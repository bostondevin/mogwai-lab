import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { ButtonSettings } from "../Builder/toolbar/ButtonSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";
import YouTube from "react-youtube";
import { VideoProps } from "../common.interface";

export const CraftVideo: UserComponent<VideoProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <div
      ref={connect}
      className={props.className + (enabled ? " pointer-events-none" : "")}
    >
      <YouTube
        videoId={props.videoId}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
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
