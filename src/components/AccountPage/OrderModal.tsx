import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
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
import { Order } from "../../hooks/useOrder";
import apiClient from "../../services/api-client";

interface Props {
  order: Order | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ order, isOpen, onClose }: Props) => {
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
          <p>{order?._id}</p>
          <p>{order?.orderDate}</p>
          <p>{order?.promiseDate}</p>
          <p>{order?.flavor}</p>
          <p>{order?.shape}</p>
          <p>{order?.size}</p>
          <p>{order?.digits}</p>
          {order?.upgrades.map((ups) => (
            <p key={ups}>{ups}</p>
          ))}
          {order?.addons.map((add) => (
            <p key={add}>{add}</p>
          ))}
          <p>{order?.orderDetails}</p>
          <p>{order?.payment}</p>
          <p>{order?.status}</p>
          {order?.images.map((image) => (
            <Image key={image} src={image} boxSize="50px" />
          ))}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            onClick={() => {
              apiClient.put(`/customer/cancel/${order?._id}`);
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
