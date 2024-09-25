import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RaceTable from "../RaceTable";

import type { TabLayoutProps } from "./types";

const TabLayout = (props: TabLayoutProps) => {
  const { data } = props;
  return (
    <Tabs>
      <TabList>
        {data.map(({ track, startTime }) => (
          <Tab key={track.id}>
            {track.name} - {new Date(startTime).getHours()}:
            {new Date(startTime).getMinutes()}{" "}
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
