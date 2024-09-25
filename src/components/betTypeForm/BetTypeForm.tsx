import { BetTypeSchema } from "@/api";
import { Flex, Button, Select } from "@chakra-ui/react";
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
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={2}
      direction={"column"}
      alignItems={"end"}
    >
      <Select
        size={"lg"}
        {...register("betType")}
        placeholder="Välj bet typ"
        borderColor={"blue"}
      >
        {BetTypeSchema.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>

      <Button
        type="submit"
        isDisabled={!isValid}
        colorScheme="blue"
        size={"lg"}
      >
        Visa resultat
      </Button>
    </Flex>
  );
};

export default BetTypeForm;
