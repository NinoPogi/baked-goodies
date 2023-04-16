import {
  Button,
  Show,
  useDisclosure,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
import { GiCakeSlice } from "react-icons/gi";
import OrderMain from "../OrderModal/OrderMain";

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
        <OrderMain />
      </Modal>
    </>
  );
};

export default CakeButton;
