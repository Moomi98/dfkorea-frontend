"use client";

import ProductCard from "@/src/components/products/ProductCard";
import styled from "styled-components";

const Container = styled.main`
  padding: 1rem;
`;

export default function Products() {
  const productCards = [
    {
      id: "test1",
      image: "/images/testBanner.jpg",
      title: "TestTitle1",
      subtitle: "Test Subtitle1",
      to: "http://naver.com",
    },
  ];
  return (
    <Container>
      {productCards.map((card, idx) => (
        <ProductCard key={idx} card={card} />
      ))}
    </Container>
  );
}
