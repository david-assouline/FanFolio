// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom icons
import React, { useEffect, useState } from "react";
import UserHoldingsTable from "./components/UserHoldingsTable";
import { handleFetchUserAttributes } from "../../../toolkit/cognito";
import UserInfo from "../../../components/UserInfo";

export default function Holdings(props) {
  const iconBoxInside = useColorModeValue("white", "white");
  const { userData } = props;

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
      <UserInfo userData={userData}/>
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <UserHoldingsTable
          title={"My Holdings"}
          captions={["Team", "Quantity", "Book Value", "Market Value", "P/L"]}
          data={holdingsData}
          isLoading={isLoading}
        />
      </Grid>
    </Flex>
  );
}
