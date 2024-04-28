// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid, Text,
  useColorModeValue
} from "@chakra-ui/react";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import MiniStat from "./MiniStat";
import { TbPlusMinus } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { SiBookmeter } from "react-icons/si";

export default function UserInfo(props) {
  const iconBoxInside = useColorModeValue("white", "white");
  const { userData } = props;
  console.log(userData)

  const formatProfitLoss = () => {

    const formattedProfitLoss = userData.profit_loss.toFixed(2);

    if (formattedProfitLoss < 0) {
      return <Text color="red.500">- ${Math.abs(formattedProfitLoss)}</Text>;
    } else if (formattedProfitLoss >= 0) {
      return <Text color="green">+ ${formattedProfitLoss}</Text>;
    } else {
      return <Text>${formattedProfitLoss} (0.00%)</Text>;
    }
  };


  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
      <MiniStat
        title={"Available funds"}
        amount={userData.balance? `$${userData.balance}` : ''}
        icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
      />
      <MiniStat
        title={"Portfolio Value"}
        amount={userData.portfolio_value? `$${userData.portfolio_value}`: ''}
        icon={<BsGraphUp size={"25px"} color={iconBoxInside} />}
      />
      <MiniStat
        title={"P/L"}
        amount={userData.profit_loss? formatProfitLoss() : ''}
        icon={<TbPlusMinus size={"25px"} color={iconBoxInside} />}
      />
      <MiniStat
        title={"Total Trades"}
        amount={userData.trade_counter? userData.trade_counter: ''}
        icon={<SiBookmeter  h={"24px"} w={"24px"} color={iconBoxInside} />}
      />
    </SimpleGrid>
  );
}
