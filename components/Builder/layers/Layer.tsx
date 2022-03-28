import { useEditor } from "@craftjs/core";
import { useLayer } from "@craftjs/layers";
import React from "react";
import cx from "classnames";
import { DefaultLayerHeader } from "./LayerHeader";

export const Layer: React.FC = ({ children }) => {
  const {
    id,
    expanded,
    hovered,
    connectors: { layer },
  } = useLayer((layer) => ({
    hovered: layer.event.hovered,
    expanded: layer.expanded,
  }));

  const { hasChildCanvases } = useEditor((state, query) => {
    console.log(state);
    return {
      hasChildCanvases: query.node(id).isParentOfTopLevelNodes(),
    };
  });

  return (
    <div ref={layer} className="flex flex-col w-full">
      <DefaultLayerHeader />
      {children && expanded ? (
        <div className="craft-layer-children">{children}</div>
      ) : null}
    </div>
  );
};
