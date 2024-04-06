// Chakra imports
import {
  Box,
  Button, ButtonGroup, Divider,
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

const OrderForm = ({ title, teamName, setTeamName }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const [action, setAction] = useState('buy');
  const [orderType, setOrderType] = useState('market');
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => console.log('Buy');
  const handleSell = () => console.log('Sell');

  return (
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            // width={{ lg: "100%" }}
          >
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
            <Spacer size={4}/>
                <Box>
                  <Text>
                    Team Name
                  </Text>
                    <Select width="300px"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    >
                      {teams.map((team, index) => (
                        <option key={index} value={team.Name}>{team.City + " " + team.Name}</option>
                      ))}
                    </Select>
                </Box>
            <Flex alignItems="baseline" justifyContent="space-between" mb="2">
              <Flex direction="column" mr="4">
                <Text mt="3">Action</Text>
                <ButtonGroup isAttached variant="outline">
                  <Button
                    onClick={() => setAction('buy')}
                    bg={action === 'buy' ? 'green.500' : 'white'}
                    color={action === 'buy' ? 'white' : 'black'}
                    borderRadius="10px"
                    width="150px"
                    _hover={{
                      bg: action === 'buy' ? 'green.600' : 'gray.200',
                    }}
                  >
                    Buy
                  </Button>
                  <Button
                    onClick={() => setAction('sell')}
                    bg={action === 'sell' ? 'green.500' : 'white'}
                    color={action === 'sell' ? 'white' : 'black'}
                    borderRadius="10px"
                    width="150px"
                    _hover={{
                      bg: action === 'sell' ? 'green.600' : 'gray.200',
                    }}
                  >
                    Sell
                  </Button>
                </ButtonGroup>
              </Flex>
              <Flex direction="column">
                <Text mt="3">Quantity</Text>
                <Input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  width="100px"
                />
              </Flex>
            </Flex>
            <Text mt="3">Order Type</Text>
            <ButtonGroup isAttached variant="outline">
              <Button
                onClick={() => setOrderType('market')}
                bg={orderType === 'market' ? 'green.500' : 'white'}
                color={orderType === 'market' ? 'white' : 'black'}
                borderRadius="10px"
                width="150px"
                _hover={{
                  bg: orderType === 'market' ? 'green.600' : 'gray.200',
                }}
              >
                Market
              </Button>
              <Button
                onClick={() => setOrderType('limit')}
                bg={orderType === 'limit' ? 'green.500' : 'white'}
                color={orderType === 'limit' ? 'white' : 'black'}
                borderRadius="10px"
                width="150px"
                _hover={{
                  bg: orderType === 'limit' ? 'green.600' : 'gray.200',
                }}
              >
                Limit
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default OrderForm;
