import { GET } from "@/api/index";
import { TProduct, TProductCard } from "@/src/types/TProduct";
export const getProductList = async (): Promise<TProductCard[]> => {
  try {
    const result: TProduct[] = await GET("/product-list");

    return result.map((product) => ({
      id: product.id,
      thumbnail: product.thumbnail,
      subtitle: product.subtitle ?? "",
      title: product.name,
      to: `/product/${product.id}`,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
};
