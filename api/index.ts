import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const GET = async (url: string) => {
  try {
    const result = await axios.get(BASE_URL + url);
    return result.data;
  } catch (e) {
    throw new Error("GET ERROR");
  }
};

export const POST = async (url: string, params: object | string) => {
  try {
    const contentType =
      params instanceof Object ? "application/json" : "text/plain";

    const result = await axios.post(BASE_URL + url, params);

    return result.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
