// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import MiniStatistics from "./components/MiniStatistics";
import UserHoldingsTable from "./components/UserHoldingsTable";
import { handleFetchUserAttributes } from "../../../toolkit/cognito";

export default function Holdings() {
  const iconBoxInside = useColorModeValue("white", "white");

  const [isLoading, setIsLoading] = useState(true);
  const [holdingsData, setHoldingsData] = useState({});

  const fetchData = async (attributes) => {
    setIsLoading(true);
    try {
      const baseURL = "https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api";

      let params = new URLSearchParams({
        league: 'MLB',
        type: 'HOLDINGS'
      });

      const url = `${baseURL}?${params.toString()}`;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          cognito_user_id: attributes.sub
        })
      });

      let data = await response.json();
      setHoldingsData(data)
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const attributes = await handleFetchUserAttributes();
        fetchData(attributes);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    };

    fetchUserAttributes();
  }, []);

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1.5fr 1fr", lg: "1.5fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <UserHoldingsTable
          title={"My Holdings"}
          captions={["Team", "Quantity", "Book Value", "Market Value", "P/L"]}
          data={holdingsData}
          isLoading={isLoading}
        />
        {/*<UserHoldingsTable*/}
        {/*  title={"Worst Performers"}*/}
        {/*  captions={["Team", "Price", "Change (24H)"]}*/}
        {/*  data={topFiveData}*/}
        {/*  isLoading={isLoading}*/}
        {/*/>*/}
      </Grid>
    </Flex>
  );
}
