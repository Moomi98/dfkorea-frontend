"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import Slider from "@/src/components/common/Slider";

import { getProductList } from "@/api/productFetcher";
import ProductCard from "@/src/components/products/ProductCard";

import { TProductCard } from "@/src/types/TProduct";

const Container = styled.main`
  padding: 1rem;
`;

export default function Products() {
  const [productCards, setProductCards] = useState<TProductCard[]>([]);
  const banners = [
    {
      id: 1,
      image: "/images/testBanner.jpg",
      title: "Products",
      subtitle: "DFKorea의 제품들을 소개합니다.",
    },
  ];

  const fetchProductList = async () => {
    const result = await getProductList();
    setProductCards(result);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <Slider sliders={banners} />
      <Container>
        {productCards.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </Container>
    </>
  );
}
