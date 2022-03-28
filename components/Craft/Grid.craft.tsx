import React, { useState, useEffect } from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { GridSettings } from "../Builder/settings/GridSettings";
import { nodeHook, editorHook } from "../Builder/settings/craft.utils";
import { AgGridReact, AgGridColumnProps } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-balham-dark.css";

type GridProps = {
  className?: string;
  dataSource?: string;
  rows: [];
  columns: [AgGridColumnProps];
};

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

  return (
    <div
      ref={connect}
      style={{ height: "150px" }}
      className={props.className + " ag-theme-balham-dark w-full"}
    >
      <AgGridReact
        rowData={props.rows}
        columnDefs={props.columns}
      ></AgGridReact>
    </div>
  );
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
