"use client";

import DataGrid from "@/src/components/common/DataGrid";
import {
  GridColDef,
  GridRowsProp,
  GridValueFormatterParams,
} from "@mui/x-data-grid";

import { createdAtString } from "@/src/utils/time";
import { insertDefaultColumnOptions } from "@/src/utils/datagrid";

import { TProductAdminColumn } from "@/src/types/TProduct";

export default function Products() {
  const columns: GridColDef[] = insertDefaultColumnOptions([
    {
      field: "order",
      headerName: "번호",
    },
    {
      field: "title",
      headerName: "제목",
      align: "left",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "작성 일시",
      width: 150,
      valueFormatter: (value: GridValueFormatterParams) => {
        return createdAtString(value.value);
      },
    },
  ]);

  const testItems: GridRowsProp<TProductAdminColumn> = [
    { id: 8, order: 1, title: "Frances", createdAt: 12931123 },
    {
      id: 9,
      order: 2,
      title: "Frances111",
      createdAt: Date.now(),
    },
    {
      id: 10,
      order: 3,
      title: "Frances222",
      createdAt: 1707823563346,
    },
  ];
  return <DataGrid items={testItems} columns={columns} />;
}
