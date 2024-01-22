"use client";

import Image from "next/image";
import styled from "styled-components";
import Button from "../common/Button";
import getWord from "@/src/constants/words";

import { useRouter } from "next/navigation";

import { TProductCard } from "@/src/types/TProduct";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 450px;
  height: 300px;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 100px;
    min-width: 100%;
    min-height: 70vw;
    height: auto;
  }
`;

const Thumbnail = styled(Image)`
  border-radius: 1rem;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;
`;

const Subtitle = styled.span`
  margin: 1rem 0;
`;

type ProductCardProps = {
  card: TProductCard;
};

export default function ProductCard(props: ProductCardProps) {
  const router = useRouter();

  const goToDetailPage = (id: string) => {
    router.push(`/products/detail?id=${id}`);
  };

  return (
    <Container>
      <ThumbnailWrapper>
        <Thumbnail src={props.card.thumbnail} alt="thumbnail" fill />
      </ThumbnailWrapper>
      <InfoWrapper>
        <h2>{props.card.title}</h2>
        <Subtitle>{props.card.subtitle}</Subtitle>
        <Button
          text={getWord("Common", "more")}
          icon="move"
          value={props.card.id}
          onClick={goToDetailPage}
        />
      </InfoWrapper>
    </Container>
  );
}
