import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Grid,
  Text,
} from "@chakra-ui/react";
import { RaceAccordionProps } from "./types";
import Time from "../Time";
import DetailInformationRow from "../DetailedInformation";

const RaceAccordion = (props: RaceAccordionProps) => {
  return (
    <Accordion allowMultiple>
      {props.data.map((race) => {
        return (
          <AccordionItem key={race.id}>
            <h3>
              <AccordionButton>
                <Grid
                  templateColumns={"40px auto 30px 30px"}
                  gap={2}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Text as="b" justifySelf={"start"}>
                    # {race.number}
                  </Text>
                  <Text as={"i"} justifySelf={"start"} noOfLines={1}>
                    {race.name || "Inget namn"}
                  </Text>
                  <Time startTime={race.startTime} justifySelf={"end"} />
                  <AccordionIcon justifySelf={"end"} />
                </Grid>
              </AccordionButton>
            </h3>
            <AccordionPanel marginLeft={"40px"}>
              {race.starts.map(({ horse, postPosition, driver, id }) => (
                <DetailInformationRow
                  postPosition={postPosition}
                  horse={horse}
                  driver={driver}
                  data-testid={id}
                />
              ))}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RaceAccordion;
