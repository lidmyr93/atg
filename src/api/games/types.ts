import { z } from "zod";

import {
  GamesSchema,
  GameRaceSchema,
  GameStartSchema,
  GameHorseSchema,
  GameDriverSchema,
} from "./schemas";

export type Game = z.infer<typeof GamesSchema>;
export type GameRace = z.infer<typeof GameRaceSchema>;
export type GameStart = z.infer<typeof GameStartSchema>;
export type GameHorse = z.infer<typeof GameHorseSchema>;
export type GameDriver = z.infer<typeof GameDriverSchema>;
