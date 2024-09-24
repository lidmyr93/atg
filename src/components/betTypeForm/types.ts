import { z } from "zod";
import { FormSchema } from "./schema";

export type FormData = z.infer<typeof FormSchema>;

export type BetTypeFormProps = Omit<
  React.HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  onSubmit: (formData: FormData) => void;
};
