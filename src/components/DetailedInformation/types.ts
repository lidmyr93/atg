import { GameStart } from "@api/games/types";

export type DetailInformationRowProps = Pick<
  GameStart,
  "horse" | "driver" | "postPosition"
>;
