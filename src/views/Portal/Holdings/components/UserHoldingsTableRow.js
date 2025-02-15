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

function UserHoldingsTableRow(props) {
  const { teamFullname, quantity, bookValue, sharePrice } = props;
  const textColor = useColorModeValue("gray.700", "white");

  const formatPriceChange = () => {
    if (!bookValue) return '';

    const marketValue = quantity * sharePrice;
    const priceDifference = marketValue.toFixed(2) - bookValue.toFixed(2);
    const percentChange = (priceDifference / bookValue) * 100;

    const formattedPriceDifference = priceDifference.toFixed(2);
    const formattedPercentChange = percentChange.toFixed(2);

    if (priceDifference < 0) {
      return <Text color="red.500">{formattedPriceDifference} ({formattedPercentChange}%)</Text>;
    } else if (priceDifference > 0) {
      return <Text color="green">+{formattedPriceDifference} ({formattedPercentChange}%)</Text>;
    } else {
      return <Text>-</Text>;
    }
  };


  return (
    <Tr>
      <Td minWidth={{ sm: "175px" }} pl="0px">
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
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {`${quantity}`}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {bookValue.toFixed(2)}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {(quantity * sharePrice).toFixed(2)}
        </Text>
      </Td>

      <Td minWidth="175px">
        <Text fontSize="md" color={textColor} fontWeight="semi-bold" pb=".5rem">
          {formatPriceChange()}
        </Text>
      </Td>

    </Tr>
  );
}

export default UserHoldingsTableRow;
