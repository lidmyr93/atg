import { z } from "zod";

export const BetTypeSchema = z.enum(["V75", "V86", "GS75"]);

export const TrackSchema = z.object({ id: z.number(), name: z.string() });

export const StartSchema = z.object({
  number: z.number(),
  name: z.string(),
  distribution: z.number(),
});

export const FavoriteSchema = z.object({
  raceId: z.string(),
  legNumber: z.number(),
  start: StartSchema,
});

export const RaceStartSchema = z.object({
  number: z.number(),
  horse: z.object({ name: z.string() }),
});

export const RaceSchema = z.object({
  id: z.string(),
  starts: z.array(RaceStartSchema),
});

export const UpcomingSchema = z.object({
  id: z.string(),
  newBettingSystem: z.boolean(),
  startTime: z.string(),
  tracks: z.array(TrackSchema),
  favorites: z.array(FavoriteSchema),
  races: z.array(RaceSchema),
  bettable: z.boolean().optional(),
});

export const ResultSchema = z.object({
  id: z.string(),
  tracks: z.array(TrackSchema),
  totalToWin: z.number(),
  startTime: z.string(),
  addOns: z
    .array(z.string())
    .optional() /* I'm assuming we could narrow this type down even further. But since no documentation I'm leaving it like this */,
});

export const ResultsSchema = z.array(ResultSchema);

export const ProductsSchema = z.object({
  betType: BetTypeSchema,
  results: ResultsSchema,
  upcoming: z.optional(z.array(UpcomingSchema)),
});
