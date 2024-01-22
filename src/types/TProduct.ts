export type TProductCard = {
  id: string | number;
  thumbnail: string;
  title: string;
  subtitle: string;
  to: string;
};

export type TProduct = {
  _id: string | number;
  thumbnail: string;
  name: string;
  modelNo: string;
  productDetail: string;
  subtitle?: string;
};
