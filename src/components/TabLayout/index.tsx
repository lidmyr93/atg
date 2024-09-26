import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Flex,
} from "@chakra-ui/react";

import type { TabLayoutProps } from "./types";
import Time from "../Time";
import RaceAccordion from "../RaceAccordion";

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
                <Time startTime={startTime} />
              </Text>
            </Flex>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {data.map(({ track, races }) => (
          <TabPanel key={track.id}>
            <RaceAccordion data={races} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabLayout;
