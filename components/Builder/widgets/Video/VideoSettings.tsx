import React from 'react';

import { ToolbarSection } from '../../EditPanel/Toolbar/ToolbarSection';
import { ToolbarItem } from '../../EditPanel/Toolbar/ToolbarItem';
// import { ToolbarRadio } from '../../EditPanel/Toolbar/ToolbarRadio';

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
