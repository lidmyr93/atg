import { BetType, BetTypeSchema } from "@/api";
import ErrorComponent from "@/components/ErrorComponent";
import { getProductsQuery } from "@/queries";
import { createFileRoute } from "@tanstack/react-router";

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

  errorComponent: ErrorComponent,
});
