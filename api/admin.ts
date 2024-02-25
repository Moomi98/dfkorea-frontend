import { GET, POST } from "@/api/index";
import { convertContentImageSrcToLink } from "@/src/utils/image";

export const login = async (id: string, password: string): Promise<boolean> => {
  return POST("/admin/login", { id, password, type: 0 });
};

export const addProductPost = async (
  title: string,
  content: string
): Promise<string | number> => {
  const newPostId: number = await GET("/admin/product-list/write/new");
  const formattedContent = await convertContentImageSrcToLink(
    content,
    newPostId
  );

  return POST("/admin/product-list/write", {
    id: newPostId,
    title,
    content: formattedContent,
  });
};
