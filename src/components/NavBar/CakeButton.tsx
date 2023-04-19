import { useState } from "react";
import {
  Button,
  Show,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { GiCakeSlice } from "react-icons/gi";
import OrderModal from "./OrderCake/OrderModal";

const CakeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
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
          <OrderModal loading={loading} setLoading={setLoading} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default CakeButton;
