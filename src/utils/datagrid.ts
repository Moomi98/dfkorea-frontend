import { GridColDef } from "@mui/x-data-grid";

export const insertDefaultColumnOptions = (
  columns: GridColDef[]
): GridColDef[] => {
  return columns.map((column) => ({
    ...column,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    sortable: false,
  }));
};
