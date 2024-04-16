// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React, { useState } from "react";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import OrderForm from "./components/OrderForm";
import StockInfoCard from "./components/StockInfoCard";

export default function Trade() {
  const iconBoxInside = useColorModeValue("white", "white");
  const [selectedTeam, setSelectedTeam] = useState('Yankees');

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Available funds"}
          amount={"$1,337"}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Portfolio Value"}
          amount={"$8,800"}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"P/L"}
          amount={"+$3,020"}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Trades"}
          amount={"26"}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <OrderForm
          title={"Buy & Sell"}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
        />
        <StockInfoCard
          selectedTeam={selectedTeam}
        />
      </Grid>
    </Flex>
  );
}
