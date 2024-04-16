// OrderPreviewModal.js
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Text, Stack, HStack, FormControl, FormLabel, Select, Input, Box
} from "@chakra-ui/react";

const OrderPreviewModal = ({ isOpen, onClose, orderDetails }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>TSLA TESLA, INC. CDR (CAD HEDGED)</ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            <HStack justifyContent="space-between">
              <FormControl id="action">
                <FormLabel>Action</FormLabel>
                Buy
              </FormControl>
              <FormControl id="quantity">
                <FormLabel>Quantity</FormLabel>
                1
              </FormControl>
              <FormControl id="price-type">
                <FormLabel>Order Type</FormLabel>
                Market
              </FormControl>
            </HStack>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Est. Total
                <Text as="span" fontWeight="normal">
                  $24.42
                </Text>
              </Text>
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose} variant={"outline"}>
            Cancel
          </Button>
          <Button colorScheme="green">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OrderPreviewModal;
