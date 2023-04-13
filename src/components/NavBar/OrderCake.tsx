import { Button, Show, useDisclosure } from "@chakra-ui/react";
import { GiCakeSlice } from "react-icons/gi";
import OrderModal from "../OrderModal/OrderModal";

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
        <Show above="lg">Order Cake</Show>
      </Button>
      <OrderModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default CakeButton;
