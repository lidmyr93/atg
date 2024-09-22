import { queryOptions } from "@tanstack/react-query";
import { getProducts } from "@/api";
import type { BetType } from "@/api";

export const getProductsQuery = (betType: BetType) =>
  queryOptions({
    queryKey: ["products", betType],
    queryFn: () => getProducts(betType),
  });
