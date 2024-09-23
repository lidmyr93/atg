import { z } from "zod";

export const GameDriverSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  shortName: z.string(),
  location: z.string(),
  birth: z.number(),
  homeTrack: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .optional(),
});
export const GameHorseSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  sex: z.string(),
  record: z.object({
    code: z.string(),
    startMethod: z.string(),
    distance: z.string(),
    time: z.object({
      minutes: z.number(),
      seconds: z.number(),
      tenths: z.number(),
    }),
  }),
});

export const StartSchema = z.object({
  id: z.string(),
  number: z.number(),
  postPosition: z.number(),
  distance: z.number(),
  horse: GameHorseSchema,
  driver: GameDriverSchema,
  result: z.unknown(),
  pools: z.unknown(),
  videos: z.unknown(),
});

export const GameRaceSchema = z.object({
  id: z.string(),
  date: z.string(),
  name: z.string().optional(),
  number: z.number(),
  distance: z.number(),
  startTime: z.string(),
  prize: z.string(),
  terms: z.unknown(),
  sport: z.string(),
  track: z.object({
    id: z.number(),
    name: z.string(),
    condition: z.string(),
    countryCode: z.string(),
  }),
  result: z.unknown(),
  status: z.string(),
  mediaId: z.string(),
  pools: z.unknown(),
  starts: z.array(StartSchema),
  mergedPools: z.unknown(),
});

export const GamesSchema = z.object({
  "@type": z.string(),
  id: z.string(),
  status: z.string(),
  pools: z.unknown(),
  races: z.array(GameRaceSchema),
  currentVersion: z.number(),
  newBettingSystem: z.boolean(),
  type: z.unknown(),
});
