import React from "react";

import { ToolbarSection } from "../Builder/EditPanel/SettingsPanel/ToolbarSection";
import { ToolbarItem } from "../Builder/EditPanel/SettingsPanel/ToolbarItem";
// import { ToolbarRadio } from '../../EditPanel/SettingsPanel/ToolbarRadio';

export const VideoSettings = () => {
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
