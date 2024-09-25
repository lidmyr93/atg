import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Collapse,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { RaceTableProps } from "./types";

import { Fragment, useState } from "react";
import DetailInformationRow from "../DetailedInformation";
import Time from "../Time";

const RaceTable = (props: RaceTableProps) => {
  const { data } = props;

  const [expanedRow, setExpandedRow] = useState<string | null>(null);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          Klicka på varje rad för att visa mer information
        </TableCaption>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Namn</Th>
            <Th>Start tid</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((race) => (
            <Fragment key={race.id}>
              <Tr
                cursor={"pointer"}
                onClick={() =>
                  setExpandedRow((prevState) =>
                    prevState === race.id ? null : race.id
                  )
                }
              >
                <Td>{race.number}</Td>
                <Td>
                  <Tooltip label={race.name}>
                    <Box
                      maxWidth={300}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {race.name || "Inget namn"}
                    </Box>
                  </Tooltip>
                </Td>
                <Td>
                  <Time startTime={race.startTime} />
                </Td>
              </Tr>

              <Tr>
                <Td pt={0} pb={0} />
                <Td colSpan={3} pt={0} pb={0}>
                  <Collapse in={expanedRow === race.id}>
                    {race.starts.map(({ horse, postPosition, driver, id }) => (
                      <Fragment key={id}>
                        <DetailInformationRow
                          postPosition={postPosition}
                          horse={horse}
                          driver={driver}
                        />
                      </Fragment>
                    ))}
                  </Collapse>
                </Td>
              </Tr>
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RaceTable;
