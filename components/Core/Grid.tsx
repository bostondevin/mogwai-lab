import React from "react";
import { AgGridReact, AgGridColumnProps } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-balham-dark.css";

export type GridProps = {
  className?: string;
  dataSource?: string;
  rows: [];
  columns: [AgGridColumnProps];
};

export const Grid = React.forwardRef((props: GridProps, ref: any) => (
  <div
    ref={ref}
    style={{ height: "150px" }}
    className={props.className + " ag-theme-balham-dark w-full"}
  >
    <AgGridReact rowData={props.rows} columnDefs={props.columns}></AgGridReact>
  </div>
));
