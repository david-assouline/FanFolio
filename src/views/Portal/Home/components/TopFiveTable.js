// Chakra imports
import {
  Flex,
  Icon, Progress,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import TopFiveTableRow from "./TopFiveTableRow";

const TopFiveTable = ({ title, captions, data, isLoading }) => {
  const textColor = useColorModeValue("gray.700", "white");

  let selectedData = [];
  if (title === "Top Performers") {
    selectedData = data.positive_changes;
  } else if (title === "Worst Performers") {
    selectedData = data.negative_changes;
  }


  if (isLoading) {
    return (
      <Card p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p='4px 0px 9px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
          </Flex>
        </CardHeader>
        <Progress size='sm' isIndeterminate colorScheme='blue' />
      </Card>
    );
  }

  return (
    <Card p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='4px 0px 9px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            {captions.map((caption, idx) => {
              return (
                <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {selectedData.map((row, index) => (
            <TopFiveTableRow
              key={index}
              teamFullname={row.TeamFullName}
              currentSharePrice={row.CurrentSharePrice}
              lastClosePrice={row.LastClosePrice}
              percentageChange={row.PercentageChange}
            />
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default TopFiveTable;
