import { Dispatch, SetStateAction, useState } from "react";
import {
  Image,
  ModalCloseButton,
  ModalHeader,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import OrderingForm from "./OrderModal/OrderingForm";
import WaitingForm from "./OrderModal/WaitingForm";
import PayingForm from "./OrderModal/PayingForm";
import FullfillingForm from "./OrderModal/FullfillingForm";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

interface Order {
  _id: string;
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
  customer: Customer;
  order: Order;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({
  isOpen,
  onClose,
  status,
  setStatus,
  order,
  customer,
}: Props) => {
  let modal;

  if (status === "ordering") {
    modal = <OrderingForm customer={customer} setStatus={setStatus} />;
  } else if (status === "processing") {
    modal = (
      <WaitingForm customer={customer} order={order} setStatus={setStatus} />
    );
  } else if (status === "fullfilling") {
    modal = <FullfillingForm />;
  } else if (status === "paying") {
    modal = <PayingForm order={order} />;
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
