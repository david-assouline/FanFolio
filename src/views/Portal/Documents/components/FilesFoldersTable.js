// Chakra imports
import {
  Button, Flex,
  Progress,
  Table,
  Tbody, Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import FileTableRow from "./FileTableRow";
import FolderTableRow from "./FolderTableRow";
import { ArrowBackIcon, DownloadIcon } from "@chakra-ui/icons";

const FilesFoldersTable = ({ title, captions, data, isLoading, folderIsExpanded, setFolderIsExpanded, setExpandedFolderName, setExpandedFolderData }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 12px 0px'>
        {/*<Flex justifyContent="space-between" alignItems="center" width="100%">*/}
          <Text fontSize='xl' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          {/*<Button rightIcon={<DownloadIcon w="25px" h="25px" />}*/}
          {/*        color="gray.700"*/}
          {/*        variant="outline"*/}
          {/*        borderColor="gray.700"*/}
          {/*        borderWidth="0px"*/}
          {/*>*/}
          {/*  Download All*/}
          {/*</Button>*/}
        {/*</Flex>*/}
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
            {isLoading ? (
                <Tr>
                  <Td colSpan={captions.length}>
                    <Progress size="md" colorScheme="blue" isIndeterminate />
                  </Td>
                </Tr>
              ) : data.files.map((file, index) => (
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

export default FilesFoldersTable;
