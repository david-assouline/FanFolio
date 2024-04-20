// Chakra imports
import {
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import FileTableRow from "./FileTableRow";
import FolderTableRow from "./FolderTableRow";
import {ArrowBackIcon} from "@chakra-ui/icons";

const ExpandedTable = ({ title, captions, data, folderIsExpanded, setFolderIsExpanded, setExpandedFolderData, setExpandedFolderName }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const handleCloseButtonClick = () => {
    setFolderIsExpanded(false)
  }

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 12px 0px'>
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Text fontSize='xl' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Button leftIcon={<ArrowBackIcon w="25px" h="25px" />}
                  color="gray.700"
                  variant="outline"
                  borderColor="gray.700"
                  borderWidth="2px"
                  onClick={handleCloseButtonClick}>
            BACK
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor} size="sm">
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.files.map((file, index) => (
              <FileTableRow
                key={index}
                file={file}
              />
            ))}
            {Object.keys(data.folders).map((folderName, index) => {
              return (
                <FolderTableRow
                  key={index}
                  name={folderName}
                  folderData={data.folders[folderName]}
                  folderIsExpanded={folderIsExpanded}
                  setFolderIsExpanded={setFolderIsExpanded}
                  setExpandedFolderName={setExpandedFolderName}
                  setExpandedFolderData={setExpandedFolderData}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ExpandedTable;
