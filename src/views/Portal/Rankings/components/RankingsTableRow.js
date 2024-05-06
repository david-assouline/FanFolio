import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function RankingsTableRow(props) {
  const { rank, username, total, profitLoss, tradeCounter } = props;
  const textColor = useColorModeValue("gray.700", "white");

  const formatPriceChange = () => {
    if (!profitLoss) return '0.00';

    const formattedPriceDifference = profitLoss.toFixed(2);

    if (profitLoss < 0) {
      return <Text color="red.500">{formattedPriceDifference}</Text>;
    } else if (profitLoss > 0) {
      return <Text color="green">+{formattedPriceDifference}</Text>;
    } else {
      return <Text>-</Text>;
    }
  };


  return (
    <Tr>
      <Td minWidth={{ sm: "20px" }} pl="0px">
        <Flex align="center" py=".2rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {rank + 1}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {username}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {total.toFixed(2)}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {formatPriceChange()}
        </Text>
      </Td>

      <Td minWidth="175px">
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {tradeCounter}
        </Text>
      </Td>

    </Tr>
  );
}

export default RankingsTableRow;
