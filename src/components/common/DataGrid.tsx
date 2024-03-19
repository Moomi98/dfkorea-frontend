"use client";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";

type TListProps = {
  columns: GridColDef[];
  items: GridRowsProp;
  showCheckbox?: boolean;
  onInitialized?: Function;
};

export default function MUIDataGrid(props: TListProps) {
  const dataGridRef = useRef(null);

  useEffect(() => {
    props.onInitialized && props.onInitialized(dataGridRef);
  }, [props]);

  return (
    <DataGrid
      ref={dataGridRef}
      rows={props.items}
      columns={props.columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      pageSizeOptions={[10, 20, 30, 50, 100]}
      checkboxSelection={props.showCheckbox}
    />
  );
}
