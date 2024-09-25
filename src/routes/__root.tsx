import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Flex, Center, Box, Image, Container } from "@chakra-ui/react";
import AtgIcon from "@assets/atg.svg";

type Context = { queryClient: QueryClient };
export const Route = createRootRouteWithContext<Context>()({
  component: () => (
    <Flex direction="column" h="100vh" overflow="hidden">
      <Center as="header" bg={"blue"} p={4} w="100%">
        <Box width={100}>
          <Image src={AtgIcon} alt="ATG" />
        </Box>
      </Center>

      <Container
        as="main"
        flex="1"
        overflowX="auto"
        p={4}
        pt={12}
        maxWidth={"container.lg"}
        centerContent
      >
        <Outlet />
      </Container>
    </Flex>
  ),
});
