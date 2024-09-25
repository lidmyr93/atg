import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Flex,
} from "@chakra-ui/react";
import RaceTable from "../RaceTable";

import type { TabLayoutProps } from "./types";

const TabLayout = (props: TabLayoutProps) => {
  const { data } = props;
  return (
    <Tabs>
      <TabList>
        {data.map(({ track, startTime }) => (
          <Tab key={track.id}>
            <Flex gap={2} data-testid={`track-info-${track.name}`}>
              <Text as="b">{track.name}</Text>
              <Text>-</Text>
              <Text as="i">
                {new Date(startTime).getHours()}:
                {new Date(startTime).getMinutes()}{" "}
              </Text>
            </Flex>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {data.map(({ track, races }) => (
          <TabPanel key={track.id}>
            <RaceTable data={races} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabLayout;
