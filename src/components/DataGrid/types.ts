import { GridColDef } from "@material-ui/data-grid";

export type DataGridRows = [];

export type DataGridColumns = GridColDef[];

export interface DataGridProps {
  rows: DataGridRows;
  columns: DataGridColumns;
  pageSize?: number;
  rowHeight?: number;
}
