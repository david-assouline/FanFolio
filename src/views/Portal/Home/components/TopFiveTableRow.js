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

function TopFiveTableRow(props) {
  const { teamFullname, currentSharePrice, lastClosePrice, percentageChange } = props;
  const textColor = useColorModeValue("gray.700", "white");

  const formatPriceChange = (currentSharePrice, lastClosePrice, percentChange) => {

    const priceDifference = currentSharePrice - lastClosePrice;

    const formattedPriceDifference = priceDifference.toFixed(2);
    const formattedPercentChange = percentChange.toFixed(2);

    if (priceDifference < 0) {
      return <Text color="red.500">{formattedPriceDifference} ({formattedPercentChange}%)</Text>;
    } else if (priceDifference >= 0) {
      return <Text color="green">+{formattedPriceDifference} ({formattedPercentChange}%)</Text>;
    } else {
      return <Text>{formattedPriceDifference} (0.00%)</Text>;
    }
  };

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".2rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {teamFullname}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {`$${currentSharePrice}`}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {formatPriceChange(currentSharePrice, lastClosePrice, percentageChange)}
        </Text>
      </Td>

    </Tr>
  );
}

export default TopFiveTableRow;
