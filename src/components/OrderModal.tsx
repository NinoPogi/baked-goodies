import { Dispatch, SetStateAction, useState } from "react";
import {
  Image,
  ModalCloseButton,
  ModalHeader,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import OrderingForm from "./OrderModal/OrderingForm";
import logo from "../images/logo.svg";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

interface Props {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const OrderModal = ({ isOpen, onClose, customer, form, setForm }: Props) => {
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
        <OrderingForm customer={customer} form={form} setForm={setForm} />
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
