import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

import { ToolbarSection } from "../Builder/EditPanel/SettingsPanel/ToolbarSection";
import { ToolbarItem } from "../Builder/EditPanel/SettingsPanel/ToolbarItem";
// import { ToolbarRadio } from '../../EditPanel/SettingsPanel/ToolbarRadio';

const YoutubeDiv = styled.div<any>`
  width: 100%;
  height: 100%;
  > div {
    height: 100%;
  }
  iframe {
    pointer-events: ${(props) => (props.enabled ? "none" : "auto")};
    // width:100%!important;
    // height:100%!important;
  }
`;

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
    <YoutubeDiv ref={connect} enabled={enabled}>
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </YoutubeDiv>
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
