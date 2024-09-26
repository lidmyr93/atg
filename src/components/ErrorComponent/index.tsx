import { useNavigate } from "@tanstack/react-router";
import { Button, Flex, Heading } from "@chakra-ui/react";

const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" gap={8}>
      <Heading>Något fel har inträffat</Heading>
      <Button onClick={() => navigate({ to: "/" })}>Ta mig tillbaks!</Button>
    </Flex>
  );
};

export default ErrorComponent;
