import { z } from "zod";
import { GamesSchema } from "./schemas";
import { Game } from "./types";

const getGames = async (id: string): Promise<Game> => {
  const response =
    await fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${id}
`);

  const data = await response.json();

  try {
    await GamesSchema.parseAsync(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.warn("getGames", e.issues);
    }
  }
  return data;
};

export default getGames;
