import React, { FC } from "react";
import { DataGrid as MaterialDataGrid } from "@material-ui/data-grid";

import { DataGridProps } from "./types";

const DataGrid: FC<DataGridProps> = ({
  rows,
  columns,
  pageSize = 5,
  rowHeight = 120,
}) => {
  return (
    <MaterialDataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      rowHeight={rowHeight}
    />
  );
};

export { DataGrid };
