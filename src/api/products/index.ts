import { z } from "zod";
import type { BetType, Products } from "./types";
import { ProductsSchema } from "./schemas";

const getProducts = async (betType: BetType): Promise<Products> => {
  const response =
    await fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${betType}
`);

  const data = await response.json();

  try {
    await ProductsSchema.parseAsync(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error("getProducts", e.issues);
    }
  }

  return data;
};

export default getProducts;
