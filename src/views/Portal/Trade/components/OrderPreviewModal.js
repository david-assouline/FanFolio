// OrderPreviewModal.js
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text, Stack, HStack, FormControl, FormLabel, Box
} from "@chakra-ui/react";

const OrderPreviewModal = ({ isOpen, onClose, formData, teamData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{formData.selectedTeam}</ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            <HStack justifyContent="space-between">
              <FormControl id="action">
                <FormLabel>Action</FormLabel>
                {formData.action}
              </FormControl>
              <FormControl id="quantity">
                <FormLabel>Quantity</FormLabel>
                {formData.quantity}
              </FormControl>
              <FormControl id="price-type">
                <FormLabel>Order Type</FormLabel>
                {formData.orderType}
              </FormControl>
              <FormControl id="total-cose">
                <FormLabel>Total Cost</FormLabel>
                <Text fontWeight="semibold" lineHeight="tight" isTruncated>
                  {teamData ? `$${(formData.quantity * teamData.CurrentSharePrice).toFixed(2)}` : ""}
                </Text>
              </FormControl>
            </HStack>
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
};

export default OrderPreviewModal;
