// Chakra imports
import {
  CircularProgress,
  Flex,
  Grid,
  Image,
  SimpleGrid, Skeleton, Stack,
  useColorModeValue
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
  WalletIcon
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import OrderForm from "./components/OrderForm";
import StockInfoCard from "./components/StockInfoCard";
import UserInfo from "../../../components/UserInfo";

export default function Markets(props) {
  const iconBoxInside = useColorModeValue("white", "white");
  const { userData } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState("New York Yankees");
  const [leagueData, setLeagueData] = useState([]);
  const [teamData, setTeamData] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(`https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api?league=MLB&type=GET_ALL`);
      let data = await response.json();
      setLeagueData(data);

    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <UserInfo userData={userData}/>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px">
        {isLoading ? (
          <>
            <CircularProgress isIndeterminate color="green.500" mx="auto" my="20px" />
            <CircularProgress isIndeterminate color="green.500" mx="auto" my="20px" />
          </>
        ) : (
          <>
            <OrderForm
              title={"Buy & Sell"}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              teamData={teamData}
            />
            <StockInfoCard
              selectedTeam={selectedTeam}
              leagueData={leagueData}
              teamData={teamData}
              setTeamData={setTeamData}
            />
          </>
        )}
      </Grid>
    </Flex>
  );
}
