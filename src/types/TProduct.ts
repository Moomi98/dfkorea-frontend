export type TProductCard = {
  id: string | number;
  thumbnail: string;
  title: string;
  subtitle: string;
  to: string;
};

export type TProduct = {
  id: string | number;
  thumbnail: string;
  name: string;
  productDetail: string;
  subtitle?: string;
};
