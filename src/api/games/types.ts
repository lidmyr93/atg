import { z } from "zod";
import { GamesSchema } from "./schemas";

export type Game = z.infer<typeof GamesSchema>;
