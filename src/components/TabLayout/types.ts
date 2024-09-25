import { GameRace, Result, Track } from "@/api";

export type Data = Omit<Result, "tracks"> & {
  track: Track;
  races: GameRace[];
};
export type TabLayoutProps = {
  data: Data[];
};
