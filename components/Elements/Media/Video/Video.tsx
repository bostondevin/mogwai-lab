import React from "react";
import YouTube from "react-youtube";

export interface VideoProps {
  videoId?: string;
  className?: string;
}

export const Video = React.forwardRef((props: VideoProps, ref: any) => (
  <YouTube
    ref={ref}
    videoId={props.videoId}
    className={props.className}
    opts={{
      width: "100%",
      height: "100%",
    }}
  />
));
