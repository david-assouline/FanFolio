// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom icons
import React, { useEffect, useState } from "react";
import TopFiveTable from "./components/TopFiveTable";
import UserInfo from "../../../components/UserInfo";

export default function Home(props) {
  const iconBoxInside = useColorModeValue("white", "white");
  const { userData } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState('New York Yankees');
  const [topFiveData, setTopFiveData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(`https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api?league=MLB&type=TOP_5`);
      let data = await response.json();
      setTopFiveData(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(r => r)
  }, []);

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <UserInfo userData={userData}/>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <TopFiveTable
          title={"Top Performers"}
          captions={["Team", "Price", "Change (24H)"]}
          data={topFiveData}
          isLoading={isLoading}
        />
        <TopFiveTable
          title={"Worst Performers"}
          captions={["Team", "Price", "Change (24H)"]}
          data={topFiveData}
          isLoading={isLoading}
        />
      </Grid>
    </Flex>
  );
}
