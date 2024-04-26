// Chakra imports
import {
  CircularProgress,
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
import React from "react";
import UserHoldingsTableRow from "./UserHoldingsTableRow";

const UserHoldingsTable = ({ title, captions, data, isLoading }) => {
  const textColor = useColorModeValue("gray.700", "white");

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
        <CircularProgress isIndeterminate color="green.500" mx="auto" my="20px" />
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
          {data.map((row, index) => (
            <UserHoldingsTableRow
              key={index}
              teamFullname={row.TeamFullName}
              quantity={row.Quantity}
              bookValue={row.BookValue}
              sharePrice={row.CurrentSharePrice}
            />
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default UserHoldingsTable;
