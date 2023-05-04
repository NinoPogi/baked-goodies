import {
  Image,
  ModalCloseButton,
  ModalHeader,
  Modal,
  ModalContent,
  ModalOverlay,
  Heading,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
} from "@chakra-ui/react";
import logo from "../../images/logo.svg";
import { Order } from "../../hooks/useOrders";
import apiClient from "../../services/api-client";

interface Props {
  selectedOrder: Order | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ selectedOrder, isOpen, onClose }: Props) => {
  return (
    <Modal
      size={{
        md: "xl",
        lg: "2xl",
        xl: "3xl",
        "2xl": "4xl",
      }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p="5px 30px 0 30px">
          <Heading pb="20px">OrderYourCakeNow.</Heading>
          <p>{selectedOrder?._id}</p>
          <p>{selectedOrder?.orderDate}</p>
          <p>{selectedOrder?.promiseDate}</p>
          <p>{selectedOrder?.flavor}</p>
          <p>{selectedOrder?.shape}</p>
          <p>{selectedOrder?.size}</p>
          <p>{selectedOrder?.digits}</p>
          {selectedOrder?.upgrades.map((ups) => (
            <p key={ups}>{ups}</p>
          ))}
          {selectedOrder?.addons.map((add) => (
            <p key={add}>{add}</p>
          ))}
          <p>{selectedOrder?.orderDetails}</p>
          <p>{selectedOrder?.status}</p>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            onClick={() => {
              apiClient.put(`/customer/cancel/${selectedOrder?._id}`);
              onClose();
            }}
          >
            Cancel Order
          </Button>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
