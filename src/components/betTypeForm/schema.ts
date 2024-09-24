import { z } from "zod";
import { BetTypeSchema } from "@/api";

export const FormSchema = z.object({ betType: BetTypeSchema });
