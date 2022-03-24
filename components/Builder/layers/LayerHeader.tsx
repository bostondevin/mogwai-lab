import React from "react";
import cx from "classnames";
import { useEditor } from "@craftjs/core";
import { useLayer } from "@craftjs/layers";
import { Button } from "components/Core/Button";
import { Icon } from "components/Core/Icon";

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
      className="text-xs p-2 flex w-full hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer select-none"
      ref={drag}
    >
      <div className="flex w-full" ref={layerHeader}>
        {topLevel && <Icon className="fa fa-link" />}

        <Button className="mr-2" onMouseDown={() => toggleLayer()}>
          <Icon
            className={cx([
              "",
              {
                invisible: !children || children.length === 0,
                "fa-solid fa-chevron-down": expanded,
                "fa-solid fa-chevron-right": !expanded,
              },
            ])}
          />
        </Button>
        <EditableLayerName />
      </div>

      <Button
        className={hidden && "opacity-50"}
        onClick={() => actions.setHidden(id, !hidden)}
      >
        <Icon className={hidden ? "fa fa-eye" : "fa fa-eye"} />
      </Button>
    </div>
  );
};
