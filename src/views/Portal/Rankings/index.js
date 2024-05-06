// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom icons
import React, { useEffect, useState } from "react";
import UserInfo from "../../../components/UserInfo";
import RankingsTable from "./components/RankingsTable";

export default function Rankings(props) {
  const iconBoxInside = useColorModeValue("white", "white");
  const [isLoading, setIsLoading] = useState(false);
  const {rankingsData} = props

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      {/*<UserInfo userData={userData}/>*/}
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <RankingsTable
          title={"Rankings"}
          captions={["Ranking", "Username", "Total", "Unrealized P&L", "Trade Counter"]}
          data={rankingsData}
          isLoading={isLoading}
        />
      </Grid>
    </Flex>
  );
}
