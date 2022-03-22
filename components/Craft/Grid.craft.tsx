import React, { useState, useEffect } from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Grid, GridProps } from "../Core/Grid";
import { GridSettings } from "../Builder/toolbar/GridSettings";
import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";

export const CraftGrid: UserComponent<GridProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  /*
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    console.log(props);
    setColumns([{ field: "make" }, { field: "model" }, { field: "price" }]);
    setRows([
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ]);
  }, []);
*/

  return <Grid ref={connect} {...props} />;
};

CraftGrid.craft = {
  displayName: "Grid",
  props: {
    className: "w-full",
  },
  rules: {
    canDrag: () => true,
    /*
    canMoveIn: (nodes) =>
      nodes.every((node) => node.data.type === Text || node.data.type === Icon),
      */
  },
  related: {
    toolbar: GridSettings,
  },
};
