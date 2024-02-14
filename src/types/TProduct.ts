import { Tid } from "@/src/types/TCommon";

export type TProductCard = {
  id: Tid;
  thumbnail: string;
  title: string;
  subtitle: string;
  to: string;
};

export type TProductAdminColumn = {
  id: Tid;
  order: number;
  title: string;
  createdAt: number;
};

export type TProduct = {
  id: Tid;
  thumbnail: string;
  name: string;
  productDetail: string;
  subtitle?: string;
};
