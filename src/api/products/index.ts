import { z } from "zod";
import type { BetType, Products } from "./types";
import { ProductsSchema } from "./schemas";

const getProducts = async (betType: BetType): Promise<Products> => {
  const response = await fetch(
    `https://www.atg.se/services/racinginfo/v1/api/products/${betType}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  try {
    await ProductsSchema.parseAsync(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.warn("getProducts - Validation Error", e.issues);
    }
  }

  return data;
};

export default getProducts;
