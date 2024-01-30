import { POST } from "@/api/index";

export const login = async (id: string, password: string): Promise<boolean> => {
  return POST("/admin/login", { id, password, type: 0 });
};
