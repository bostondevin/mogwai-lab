import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import YouTube from "react-youtube";

import { ToolbarSection } from "./Builder/EditPanel/SettingsPanel/ToolbarSection";
import { ToolbarItem } from "./Builder/EditPanel/SettingsPanel/ToolbarItem";

export const Video = (props: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { videoId } = props;

  return (
    <div
      ref={connect}
      className={props.className + (enabled ? " pointer-events-none" : "")}
    >
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

const VideoSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Youtube">
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Video ID"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};

Video.craft = {
  displayName: "Video",
  props: {
    videoId: "IwzUs1IMdyQ",
  },
  related: {
    toolbar: VideoSettings,
  },
};
