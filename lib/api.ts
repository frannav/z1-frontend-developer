import { StaticImageData } from "next/image";
import { ResponsePostRequest } from "./api.types";

const FETCH_URL: string = process.env.NEXT_PUBLIC_API_URL || "";

export const postRequest = async (
  img: string | StaticImageData
): Promise<ResponsePostRequest> => {
  try {
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({
        image: img,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("postRequestError: ", error || "Unknown error");
  }
};
