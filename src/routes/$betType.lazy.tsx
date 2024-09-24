import { getGamesQuery, getProductsQuery } from "@/queries";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { GameRace } from "../api/games/types";

export const Route = createLazyFileRoute("/$betType")({
  component: BetType,
});

function BetType() {
  const { betType } = Route.useParams();

  const { data: products } = useSuspenseQuery(getProductsQuery(betType));
  const mostRecentResult = products.results[0];

  const { data: game } = useQuery(getGamesQuery(mostRecentResult?.id));

  useMemo(() => {
    const racesByTrackId = game?.races.reduce<Record<number, GameRace[]>>(
      (acc, race) => {
        if (!acc[race.track.id]) {
          acc[race.track.id] = [];
        }
        acc[race.track.id].push(race);
        return acc;
      },
      {}
    );

    return mostRecentResult.tracks.map((track) => {
      const trackRaces = racesByTrackId?.[track.id] || [];

      return {
        id: mostRecentResult.id,
        track,
        totalToWin: mostRecentResult.totalToWin,
        startTime: mostRecentResult.startTime,
        races: trackRaces,
      };
    });
  }, [mostRecentResult, game]);

  return <div>Hello {betType}</div>;
}
