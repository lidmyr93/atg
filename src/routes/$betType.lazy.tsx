import { getGamesQuery, getProductsQuery } from "@/queries";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { GameRace } from "../api/games/types";

import TabLayout from "@/components/TabLayout";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const Route = createLazyFileRoute("/$betType")({
  component: BetType,
});

function BetType() {
  const { betType } = Route.useParams();
  const navigate = Route.useNavigate();

  const { data: products } = useSuspenseQuery(getProductsQuery(betType));
  const mostRecentResult = products.results[0];

  const { data: game } = useQuery(getGamesQuery(mostRecentResult?.id));

  const tracksWithRaces = useMemo(() => {
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

  return (
    <Box width={"100%"}>
      <Flex
        alignItems={"center"}
        justifyContent={["center", "space-between"]}
        mb={12}
        wrap={"wrap"}
        gap={[6, 0]}
      >
        <Box w={98} display={["none", "initial"]} />
        <Heading>Resultat av: {betType}</Heading>
        <Button
          aria-label="navigates back"
          leftIcon={<ArrowBackIcon />}
          colorScheme="blue"
          size="sm"
          onClick={() => navigate({ to: "/" })}
        >
          Tillbaka
        </Button>
      </Flex>

      <TabLayout data={tracksWithRaces} />
    </Box>
  );
}
