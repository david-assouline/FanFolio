import {
  Flex, Grid
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FilesFoldersTable from "./components/FilesFoldersTable";
import ExpandedTable from "./components/ExpandedTable";
import { handleFetchAuthSession } from "../../../toolkit/cognito";

export default function Documents() {
  // const iconBoxInside = useColorModeValue("white", "white");
  const [data, setData] = useState({ files: [], folders: {} });
  const [folderIsExpanded, setFolderIsExpanded] = useState(false);
  const [expandedFolderName, setExpandedFolderName] = useState("");
  const [expandedFolderData, setExpandedFolderData] = useState({ files: [], folders: {} });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { accessToken, idToken } = await handleFetchAuthSession();

      console.log("Fetching S3 files")
      // const authHeader = `${idToken}`;
      // console.log(authHeader)

      const response = await fetch(`https://zweyzncmwj.execute-api.us-east-1.amazonaws.com/dev/api?clientID=david_assouline`, {
        headers: {
          Authorization: idToken,
        },
      });
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(r => r);
  }, []);

  return (
      <Flex flexDirection="column" pr="30px" pt={{ base: "120px", md: "75px" }}>
        <Grid
            templateColumns={"1fr"}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            my="13px"
            gap="15px"
        >
          {folderIsExpanded ? (
              <ExpandedTable
                  title={expandedFolderName}
                  captions={["Name", "Last Modified", ""]}
                  data={expandedFolderData}
                  folderIsExpanded={folderIsExpanded}
                  setFolderIsExpanded={setFolderIsExpanded}
                  setExpandedFolderName={setExpandedFolderName}
                  setExpandedFolderData={setExpandedFolderData}
              />
          ) : (
              <FilesFoldersTable
                  title={"Documents"}
                  captions={["Name", "Last Modified", ""]}
                  data={data}
                  isLoading={isLoading}
                  folderIsExpanded={folderIsExpanded}
                  setFolderIsExpanded={setFolderIsExpanded}
                  setExpandedFolderName={setExpandedFolderName}
                  setExpandedFolderData={setExpandedFolderData}
              />
          )}
        </Grid>
      </Flex>
  );
}
