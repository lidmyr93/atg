import { createLazyFileRoute } from "@tanstack/react-router";
import { SubmitHandler } from "react-hook-form";
import { BetTypeForm, FormData } from "@/components/BetTypeForm";
import { Box } from "@chakra-ui/react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = Route.useNavigate();

  const handleSubmit: SubmitHandler<FormData> = ({ betType }) =>
    navigate({ to: "/$betType", params: { betType } });

  return (
    <Box w={"75%"} mt={"12"}>
      <BetTypeForm onSubmit={handleSubmit} />
    </Box>
  );
}
