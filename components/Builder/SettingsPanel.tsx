import { useEditor } from "@craftjs/core";
import { createElement } from "react";

export const SettingsPanel = ({ store, path }) => {
  const { active, related } = useEditor((state, query) => {
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  return <>{active && related.toolbar && createElement(related.toolbar)}</>;
};
