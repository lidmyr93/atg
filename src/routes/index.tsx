import { getProductsQuery } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useQuery(getProductsQuery("V86"));

  return <div>Hello world</div>;
}
