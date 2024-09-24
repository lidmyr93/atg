import { BetType, BetTypeSchema } from "@/api";
import { getProductsQuery } from "@/queries";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$betType")({
  params: {
    parse: (rawParams): Record<"betType", BetType> => {
      try {
        return {
          betType: BetTypeSchema.parse(rawParams.betType.toLocaleUpperCase()),
        };
      } catch (error) {
        console.error("Validation failed:", error);
        throw new Error("Invalid bet type");
      }
    },
    stringify: (rawParams) => rawParams,
  },
  loader: ({ context: { queryClient }, params: { betType } }) => {
    queryClient.ensureQueryData(getProductsQuery(betType));
  },
  onError: () => {
    throw redirect({ to: "/" });
  },
});
