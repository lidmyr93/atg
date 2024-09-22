import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";

type Context = { queryClient: QueryClient };
export const Route = createRootRouteWithContext<Context>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">ATG</div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
