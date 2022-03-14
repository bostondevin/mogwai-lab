import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { UserComponent, useNode } from "@craftjs/core";

import "ag-grid-enterprise";
import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-balham-dark.css";

export type AgGridProps = {
  className?: string;
  dataSource: string;
};

export const AgGrid: UserComponent<AgGridProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

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

  return (
    <div
      ref={connect}
      style={{ height: "150px" }}
      className={props.className + " ag-theme-balham-dark w-full"}
    >
      <AgGridReact rowData={rows} columnDefs={columns}></AgGridReact>
    </div>
  );
};
