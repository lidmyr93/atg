import { z } from "zod";

export const GamesSchema = z.object({
  "@type": z.string(),
  id: z.string(),
  status: z.string(),
  pools: z.unknown(),
  races: z.unknown(),
  currentVersion: z.number(),
  newBettingSystem: z.boolean(),
  type: z.unknown(),
});
