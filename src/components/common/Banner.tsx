"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "@/src/components/common/Banner.css";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styled from "styled-components";

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-overlay-light);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BannerImage = styled(Image)`
  position: relative;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 700;
  color: white;
`;

const Subtitle = styled.h5`
  color: white;
  letter-spacing: 1.2px;
  font-weight: 500;
`;

type TBanner = {
  id: string | number;
  image: string;
  title?: string;
  subtitle?: string;
  onClick?: Function;
};
type TBannerProps = {
  banners: TBanner[];
};
export default function Banner(props: TBannerProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      pagination
      navigation
    >
      {props.banners.map((banner) => (
        <SwiperSlide
          key={banner.id}
          onClick={() => banner.onClick && banner.onClick(banner.id)}
        >
          <BannerImage
            style={{ objectFit: "cover" }}
            alt="banner"
            src={banner.image}
            fill
            priority
          />
          {banner.title && (
            <BannerOverlay>
              <Title>{banner.title}</Title>
              <Subtitle>{banner.subtitle}</Subtitle>
            </BannerOverlay>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
