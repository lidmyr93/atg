import { z } from "zod";
import {
  BetTypeSchema,
  TrackSchema,
  StartSchema,
  FavoriteSchema,
  RaceStartSchema,
  RaceSchema,
  UpcomingSchema,
  ResultSchema,
  ResultsSchema,
  ProductsSchema,
} from "./schemas";

export type BetType = z.infer<typeof BetTypeSchema>;

export type Track = z.infer<typeof TrackSchema>;

export type Start = z.infer<typeof StartSchema>;

export type Favorite = z.infer<typeof FavoriteSchema>;

export type RaceStart = z.infer<typeof RaceStartSchema>;

export type Race = z.infer<typeof RaceSchema>;

export type Upcoming = z.infer<typeof UpcomingSchema>;

export type Result = z.infer<typeof ResultSchema>;

export type Results = z.infer<typeof ResultsSchema>;

export type Products = z.infer<typeof ProductsSchema>;
