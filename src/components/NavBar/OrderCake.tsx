import {
  Accordion,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { GiCakeSlice } from "react-icons/gi";
import FlavorRadio from "../OrderModal/FlavorRadio";
import DescriptionArea from "../OrderModal/DescriptionArea";
import OrderAccordion from "../OrderModal/OrderAccordion";

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
          <ModalBody p="30px">
            <Accordion defaultIndex={[0]} allowMultiple>
              <OrderAccordion header="Pick Flavor">
                <FlavorRadio />
              </OrderAccordion>
              <OrderAccordion header="Give Cake Description">
                <DescriptionArea />
                <FormControl p="6px">
                  or Upload Photo:
                  <Input p="6px" variant="unstyled" type="file" />
                </FormControl>
              </OrderAccordion>
            </Accordion>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr="10px" onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CakeButton;
