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
import React, { useEffect, useState } from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import TopFiveTable from "./components/TopFiveTable";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState('New York Yankees');
  const [topFiveData, setTopFiveData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(`https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api?league=MLB&type=TOP_5`);
      let data = await response.json();
      console.log(data)
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
      {/*<Grid*/}
      {/*  templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}*/}
      {/*  templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}*/}
      {/*  gap='24px'*/}
      {/*  mb={{ lg: "26px" }}>*/}
      {/*  <ActiveUsers*/}
      {/*    title={"Active Users"}*/}
      {/*    percentage={23}*/}
      {/*    chart={<BarChart />}*/}
      {/*  />*/}
      {/*  <SalesOverview*/}
      {/*    title={"Sales Overview"}*/}
      {/*    percentage={5}*/}
      {/*    chart={<LineChart />}*/}
      {/*  />*/}
      {/*</Grid>*/}
    </Flex>
  );
}
