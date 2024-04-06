import {
  Button,
  Flex, Icon, Link,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import React from "react";
import { FaFile, FaFileExcel, FaFilePdf, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import {DownloadIcon} from "@chakra-ui/icons";

function FileTableRow({ file }) {

  let fileIcon = FaFile; // Default icon
  let iconColor = "gray.700"; // Default icon color
  const fileName = file.key.split('/').pop().toLowerCase();
  const [date, time] = file.last_modified.split(" ");

  if (fileName.endsWith('.pdf')) {
    fileIcon = FaFilePdf;
    iconColor = "red.500";
  } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
    fileIcon = FaFileWord;
    iconColor = "blue.500";
  } else if (fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
    fileIcon = FaFileExcel;
    iconColor = "green";
  } else if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) {
    fileIcon = FaFilePowerpoint;
    iconColor = "orange.500";
  }

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px" pb="0px" pt="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={fileIcon} w="30px" h="30px" color={iconColor} mr={2} />
          <Flex direction="column">
            <Text
              fontSize="md"
              color="grey.700"
              fontWeight="bold"
              minWidth="100%"
            >
              {fileName}
            </Text>
            {/*<Text fontSize="sm" color="gray.400" fontWeight="normal">*/}
            {/*  {fileName}*/}
            {/*</Text>*/}
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="sm" color="grey.700" fontWeight="bold" pb=".5rem">
          {date}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {time}
        </Text>
      </Td>
      <Td pb="0px" pt="0px">
        <Link href={file.url}>
          <Button rightIcon={<DownloadIcon />} colorScheme="blue" bg="blue.100" variant="solid">
            Download
          </Button>
        </Link>
      </Td>
    </Tr>
  );
}

export default FileTableRow;
