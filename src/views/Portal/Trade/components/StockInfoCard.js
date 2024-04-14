import React from "react";
import { Box, Text, Divider, Flex, Badge, VStack } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { MLB_TEAMS_DICT } from "../../../../variables/MLB";

const StockInfoCard = ({ selectedTeam }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white">
      <Box p="6">
        <Flex alignItems="baseline">
          <Badge ml="1" fontSize="0.8em" colorScheme="green">
            {MLB_TEAMS_DICT[selectedTeam].Symbol}
          </Badge>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            pl="7px"
          >
            {MLB_TEAMS_DICT[selectedTeam].City + " " + selectedTeam}
          </Text>
        </Flex>

        <Divider mt="3"/>
        <Flex mt="3" justifyContent="space-between" alignItems="center">
          <Text fontWeight="semibold" lineHeight="tight" isTruncated>
            $15.75
          </Text>
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            ↓ $0.33 (-2.05%)
          </Text>
        </Flex>

        <Divider mt="3"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            Previous Close
          </Text>
          <Text lineHeight="tight" isTruncated>
            $15.75
          </Text>
        </Flex>

        <Divider mt="1"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            High/Low
          </Text>
          <Text lineHeight="tight" isTruncated>
            $15.99 / $15.41
          </Text>
        </Flex>

        <Divider mt="1"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            Volume
          </Text>
          <Text lineHeight="tight" isTruncated>
            399,288
          </Text>
        </Flex>

        {/*<Divider mt="1"/>*/}
        {/*<Text color="gray.500" isTruncated mt={1}>*/}
        {/*  As of 12 Apr 2024, 04:00 p.m. ET*/}
        {/*</Text>*/}


        <Divider mt="1"/>
        <Flex mt="2" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            As of 12 Apr 2024, 04:00 p.m. ET
          </Text>
          {/*<Text lineHeight="tight" isTruncated>*/}
          {/*  399,288*/}
          {/*</Text>*/}
          <RepeatIcon></RepeatIcon>
        </Flex>
        <Divider mt="2"/>
      </Box>
    </Box>
  );
};

export default StockInfoCard;
