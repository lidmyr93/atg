import { createLazyFileRoute } from "@tanstack/react-router";
import { SubmitHandler } from "react-hook-form";
import { BetTypeForm, FormData } from "@/components/betTypeForm";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = Route.useNavigate();

  const handleSubmit: SubmitHandler<FormData> = ({ betType }) =>
    navigate({ to: "/$betType", params: { betType } });

  return (
    <div>
      <BetTypeForm onSubmit={handleSubmit} />
    </div>
  );
}
