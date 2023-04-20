import { Dispatch, SetStateAction } from "react";
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
}

const OrderModal = ({ isOpen, onClose, status, setStatus }: Props) => {
  let modal;

  if (status === "ordering") {
    modal = <OrderingForm setStatus={setStatus} />;
  } else if (status === "processing") {
    modal = <WaitingForm />;
  } else if (status === "pay") {
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
        <ModalBody p="5px 30px 0 30px">{modal}</ModalBody>
        <ModalFooter>
          <Button form="order" type="submit" colorScheme="pink">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
