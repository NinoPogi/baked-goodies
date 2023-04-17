import {
  Image,
  Button,
  Show,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { GiCakeSlice } from "react-icons/gi";
import OrderForm from "../OrderCake/OrderForm";
import logo from "../../assets/logo.svg";

const CakeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<GiCakeSlice />}
        colorScheme="pink"
        variant="solid"
        onClick={onOpen}
      >
        <Show above="lg">OrderYourCakeNow</Show>
      </Button>
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
            OrderYourCakeNow Form
            <Image src={logo} alt="Baked Goodies by H" boxSize="2em" />
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody p="5px 30px 0 30px">
            <OrderForm />
          </ModalBody>
          <ModalFooter>
            <Button form="orderForm" type="submit" colorScheme="pink">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CakeButton;
