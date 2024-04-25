// OrderPreviewModal.js
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text, Stack, HStack, FormControl, FormLabel, Box, CircularProgress
} from "@chakra-ui/react";

const OrderPreviewModal = ({ isOpen, onClose, formData, teamData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitOrder = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://l2g6kvzxpa.execute-api.us-east-1.amazonaws.com/dev/api?league=MLB&type=BUY", {
        method: "POST",
        body: JSON.stringify({
          orderData: formData
        })
      });
      const data = await response;
      console.log(data.status);
      onClose();
    } catch (error) {
      console.error("Error submitting order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{formData.selected_team}</ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            {isLoading ? (
              <CircularProgress isIndeterminate color="green.300" mx="auto" my="20px" />  // Centered in the modal body
            ) : (
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
                <FormControl id="total-cost">
                  <FormLabel>Total Cost</FormLabel>
                  <Text fontWeight="semibold" lineHeight="tight" isTruncated>
                    {teamData ? `$${(formData.quantity * teamData.CurrentSharePrice).toFixed(2)}` : ""}
                  </Text>
                </FormControl>
              </HStack>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose} variant={"outline"}>
            Cancel
          </Button>
          <Button colorScheme="green" onClick={submitOrder}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderPreviewModal;
