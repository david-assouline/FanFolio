import React, { useEffect, useState } from "react";
import { Box, Text, Divider, Flex, Badge, VStack } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { MLB_TEAMS_DICT } from "../../../../variables/MLB";

const StockInfoCard = ({ selectedTeam, leagueData }) => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    if (leagueData.length > 0) {
      const data = leagueData.find(team => team.TeamFullName === selectedTeam);
      setTeamData(data || null);
    }
  }, [leagueData, selectedTeam]);

  const formatPriceChange = (teamData) => {
    if (!teamData) return '';

    const { CurrentSharePrice, LastClosePrice } = teamData;
    const priceDifference = CurrentSharePrice - LastClosePrice;
    const percentChange = (priceDifference / LastClosePrice) * 100;

    const formattedPriceDifference = priceDifference.toFixed(2);
    const formattedPercentChange = percentChange.toFixed(2);

    if (priceDifference < 0) {
      return <Text color="red.500">↓ ${Math.abs(formattedPriceDifference)} ({formattedPercentChange}%)</Text>;
    } else if (priceDifference >= 0) {
      return <Text color="green">↑ ${formattedPriceDifference} ({formattedPercentChange}%)</Text>;
    } else {
      return <Text>${formattedPriceDifference} (0.00%)</Text>;
    }
  };

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
            {selectedTeam}
          </Text>
        </Flex>

        <Divider mt="3"/>
        <Flex mt="3" justifyContent="space-between" alignItems="center">
          <Text fontWeight="semibold" lineHeight="tight" isTruncated>
            {teamData ? `$${teamData.CurrentSharePrice}` : ''}
          </Text>
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            {formatPriceChange(teamData)}
          </Text>
        </Flex>

        <Divider mt="3"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            Previous Close
          </Text>
          <Text lineHeight="tight" isTruncated>
            {teamData ? `$${teamData.LastClosePrice}` : ''}
          </Text>
        </Flex>

        <Divider mt="1"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            Season High/Low
          </Text>
          <Text lineHeight="tight" isTruncated>
            {teamData ? `$${teamData.SeasonHighPrice} / $${teamData.SeasonLowPrice}` : ''}
          </Text>
        </Flex>

        <Divider mt="1"/>
        <Flex mt="1" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            Outstanding Shares
          </Text>
          <Text lineHeight="tight" isTruncated>
            {teamData ? `${teamData.OutstandingShares}` : ''}
          </Text>
        </Flex>

        {/*<Divider mt="1"/>*/}
        {/*<Text color="gray.500" isTruncated mt={1}>*/}
        {/*  As of 12 Apr 2024, 04:00 p.m. ET*/}
        {/*</Text>*/}


        <Divider mt="1"/>
        <Flex mt="2" justifyContent="space-between" alignItems="center">
          <Text color="gray.600" fontSize="sm" lineHeight="tight" isTruncated>
            As of {teamData ? `${teamData.LastRefreshDateTime}` : ''}
          </Text>
          {/*<Text lineHeight="tight" isTruncated>*/}
          {/*  399,288*/}
          {/*</Text>*/}
          {/*<RepeatIcon></RepeatIcon>*/}
        </Flex>
        <Divider mt="2"/>
      </Box>
    </Box>
  );
};

export default StockInfoCard;
