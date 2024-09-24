import { BetTypeSchema } from "@/api";
import { Button, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { BetTypeFormProps, FormData } from "./types";
import { FormSchema } from "./schema";

const BetTypeForm = (props: BetTypeFormProps) => {
  const { onSubmit } = props;
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        size={"lg"}
        {...register("betType")}
        placeholder="Select bet type"
      >
        {BetTypeSchema.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>
      <Button type="submit" isDisabled={!isValid} colorScheme="blue">
        Take me to the results !
      </Button>
    </form>
  );
};

export default BetTypeForm;
