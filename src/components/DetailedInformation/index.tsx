import {
  Box,
  Collapse,
  Divider,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";

import { DetailInformationRowProps } from "./types";
import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const DetailInformationRow = (props: DetailInformationRowProps) => {
  const { horse, postPosition, driver } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex flexDir={"column"} gap={2} my={2}>
      <Flex
        gap={2}
        cursor={"pointer"}
        onClick={() => {
          setIsExpanded((prevState) => !prevState);
        }}
        data-testid={horse.id}
      >
        <Text data-testid={`${horse.id}-postPosition`}>{postPosition}</Text>
        <Text data-testid={`${horse.id}-name`}>{horse.name}</Text>
        <Text data-testid={`${horse.id}-driver`}>
          {driver.firstName} {driver.lastName}
        </Text>

        <IconButton
          size="xs"
          aria-label="expand"
          icon={isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
        />
      </Flex>
      <Collapse in={isExpanded}>
        <Box pl={6}>
          <Flex gap="2">
            <Text as="b">Tränare: </Text>
            <Text data-testid={`${horse.id}-trainer`}>
              {horse.trainer.firstName} {horse.trainer.lastName}
            </Text>
          </Flex>
          <Flex gap="2">
            <Text as="b">Far </Text>
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
