import React from "react";
import cx from "classnames";
import { useEditor } from "@craftjs/core";
import { useLayer } from "@craftjs/layers";
import { EditableLayerName } from "./EditableLabel";

export const DefaultLayerHeader: React.FC = () => {
  const {
    id,
    depth,
    expanded,
    children,
    connectors: { drag, layerHeader },
    actions: { toggleLayer },
  } = useLayer((layer) => {
    return {
      expanded: layer.expanded,
    };
  });

  const { hidden, actions, selected, topLevel } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const selected = query.getEvent("selected").first() === id;

    return {
      hidden: state.nodes[id] && state.nodes[id].data.hidden,
      selected,
      topLevel: query.node(id).isTopLevelCanvas(),
    };
  });

  return (
    <div
      className="py-1 px-2 flex w-full hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer select-none"
      ref={drag}
    >
      <div style={{ width: depth * 8 + "px" }}></div>
      <div className="flex w-full" ref={layerHeader}>
        {topLevel && <i className="fa fa-link" />}

        <button className="mr-2" onMouseDown={() => toggleLayer()}>
          <i
            className={cx([
              "",
              {
                invisible: !children || children.length === 0,
                "fa-solid fa-chevron-down": expanded,
                "fa-solid fa-chevron-right": !expanded,
              },
            ])}
          />
        </button>
        <EditableLayerName />
      </div>

      <button
        className={hidden ? "opacity-25" : undefined}
        onClick={() => actions.setHidden(id, !hidden)}
      >
        <i className={hidden ? "fa fa-eye" : "fa fa-eye"} />
      </button>
    </div>
  );
};
