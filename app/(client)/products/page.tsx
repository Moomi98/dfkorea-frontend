"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { getProductList } from "@/api/productFetcher";
import ProductCard from "@/src/components/products/ProductCard";

import { TProductCard } from "@/src/types/TProduct";

const Container = styled.main`
  padding: 1rem;
`;

export default function Products() {
  const [productCards, setProductCards] = useState<TProductCard[]>([]);

  const fetchProductList = async () => {
    const result = await getProductList();
    setProductCards(result);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Container>
      {productCards.map((card) => (
        <ProductCard key={card.id} card={card} />
      ))}
    </Container>
  );
}
