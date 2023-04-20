import { Dispatch, SetStateAction, useState } from "react";
import {
  Image,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import OrderingForm from "./OrderModal/OrderingForm";
import WaitingForm from "./OrderModal/WaitingForm";

interface User {
  orderDate: string;
  promiseDate: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  flavor: string;
  shape: string;
  orderDetails: string;
  images: string[];
  payment: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  user: User;
}

const OrderModal = ({ isOpen, onClose, status, setStatus, user }: Props) => {
  let modal;

  if (status === "ordering") {
    modal = <OrderingForm setStatus={setStatus} />;
  } else if (status === "processing") {
    modal = <WaitingForm user={user} />;
  } else if (status === "paying") {
    modal = "";
  }
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
        {modal}
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
