import { queryOptions } from "@tanstack/react-query";
import { getProducts, getGames } from "@/api";
import type { BetType } from "@/api";

export const getProductsQuery = (betType: BetType) =>
  queryOptions({
    queryKey: ["products", betType],
    queryFn: () => getProducts(betType),
  });

export const getGamesQuery = (id: string) =>
  queryOptions({ queryKey: ["games", id], queryFn: () => getGames(id) });
