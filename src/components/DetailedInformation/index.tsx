import { Badge, Box, Collapse, Divider, Flex, Text } from "@chakra-ui/react";

import { DetailInformationRowProps } from "./types";
import { useState } from "react";

const DetailInformationRow = (props: DetailInformationRowProps) => {
  const { horse, postPosition, driver, ...rest } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex
      flexDir={"column"}
      gap={2}
      my={2}
      {...rest}
      width={["100%", "100%", "100%%"]}
    >
      <Flex
        cursor={"pointer"}
        wrap={"wrap"}
        gap={2}
        _hover={{
          background: "gray.50",
        }}
        onClick={() => {
          setIsExpanded((prevState) => !prevState);
        }}
        data-testid={horse.id}
        alignItems={"center"}
      >
        <Badge
          colorScheme="blue"
          borderRadius={"full"}
          textAlign={"center"}
          w="20px"
          height="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          data-testid={`${horse.id}-postPosition`}
        >
          {postPosition}
        </Badge>

        <Text as="b" data-testid={`${horse.id}-name`} noOfLines={1}>
          {horse.name}
        </Text>
        <Text as="i" data-testid={`${horse.id}-driver`} justifySelf={"start"}>
          {driver.firstName} {driver.lastName}
        </Text>
      </Flex>
      <Collapse in={isExpanded}>
        <Box ml={[0, 0, "20px"]}>
          <Flex gap="2">
            <Text as="b">Tränare: </Text>
            <Text data-testid={`${horse.id}-trainer`}>
              {horse.trainer.firstName} {horse.trainer.lastName}
            </Text>
          </Flex>
          <Flex gap="2">
            <Text as="b">Far: </Text>
            <Text data-testid={`${horse.id}-father`}>
              {horse.pedigree.father.name}
            </Text>
          </Flex>
        </Box>
      </Collapse>
      <Divider />
    </Flex>
  );
};

export default DetailInformationRow;
