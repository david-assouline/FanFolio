import React, { useState } from "react";
import {
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFolder } from "react-icons/fa";
import {
  ArrowForwardIcon,
} from "@chakra-ui/icons";

function FolderTableRow({ name, folderData, folderIsExpanded, setFolderIsExpanded, setExpandedFolderName, setExpandedFolderData}) {
  const textColor = useColorModeValue("gray.700", "white");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(true)
    setExpandedFolderName(name)
    setFolderIsExpanded(true)
    setExpandedFolderData(folderData)
  }

  return (
    <>
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px" pb="10px" pt="10px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Icon as={FaFolder} h="25px" w="25px" color={"orange.500"} mr={3}/>
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td pb="10px" pt="10px"></Td>
        <Td pb="10px" pt="10px">
          <Button
              rightIcon={<ArrowForwardIcon />}
              color="blue.100"
              variant="outline"
              borderColor="blue.100"
              borderWidth="2px"
              onClick={toggleExpand}
          >
            Open
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default FolderTableRow;
