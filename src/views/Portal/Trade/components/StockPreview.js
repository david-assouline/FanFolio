// Chakra imports
import {
  Box,
  Button, ButtonGroup,
  Flex,
  Icon, Input, InputGroup, InputLeftAddon, Select,
  Spacer, Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
import { teams } from 'variables/MLBteams.js';
// react icons
import { BsArrowRight } from "react-icons/bs";

const StockPreview = ({ title }) => {
  const textColor = useColorModeValue("gray.700", "white");


  return (
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "45%" }}>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StockPreview;
