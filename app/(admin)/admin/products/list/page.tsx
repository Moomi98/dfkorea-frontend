"use client";

import DataGrid from "@/src/components/common/DataGrid";
import {
  GridColDef,
  GridRowsProp,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import styled from "styled-components";

import { createdAtString } from "@/src/utils/time";
import { insertDefaultColumnOptions } from "@/src/utils/datagrid";
import getWord from "@/src/constants/words";

import { TProductAdminColumn } from "@/src/types/TProduct";
import Button from "@/src/components/common/Button";

import { getProductList } from "@/api/productFetcher";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

type TAdminProduct = {
  id: string;
  order: number;
  title: string;
  createdAt: number;
};

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

  const [productList, setProductList] = useState<TAdminProduct[]>([]);

  const fetchProductList = async () => {
    const result = await getProductList();
    const formattedProductList = result.map((data, idx) => ({
      ...data,
      order: idx + 1,
    }));
    setProductList(formattedProductList);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Container>
      <ButtonContainer>
        <Button text={getWord("Admin", "write")} to="/admin/products/write" />
      </ButtonContainer>
      <DataGrid items={productList} columns={columns} />
    </Container>
  );
}
