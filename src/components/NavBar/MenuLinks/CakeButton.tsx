import { useState, useLayoutEffect } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import {
  GiCakeSlice,
  GiTimeSynchronization,
  GiMoneyStack,
} from "react-icons/gi";
import OrderModal from "../OrderCake/OrderModal";
import WaitModal from "../WaitCake/WaitModal";
import PayModal from "../PayCake/PayModal";
import api from "../../../services/api-client";

const CakeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("ordering");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const apiCall = async () => {
      const response = await api.get("/customer");
      setStatus(response.data[0].status);
    };
    apiCall();
  }, []);

  let buttonIcon;
  let buttonLabel;
  let modal;
  if (status === "ordering") {
    buttonIcon = <GiCakeSlice />;
    buttonLabel = "OrderYourCakeNow";
    modal = (
      <OrderModal
        loading={loading}
        setLoading={setLoading}
        setStatus={setStatus}
      />
    );
  } else if (status === "processing") {
    buttonIcon = <GiTimeSynchronization />;
    buttonLabel = "WaitYourCakeNow";
    modal = <WaitModal />;
  } else if (status === "pay") {
    buttonIcon = <GiMoneyStack />;
    buttonLabel = "PayYourCakeNow";
    modal = <PayModal />;
  }

  return (
    <>
      <Button
        leftIcon={buttonIcon}
        colorScheme="pink"
        variant="solid"
        onClick={onOpen}
      >
        {buttonLabel}
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
        <ModalContent>{modal}</ModalContent>
      </Modal>
    </>
  );
};

export default CakeButton;
