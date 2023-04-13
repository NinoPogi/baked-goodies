import {
  ModalContent,
  ModalBody,
  Accordion,
  ModalFooter,
  Button,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
import DescriptionArea from "./DescriptionArea";
import FlavorRadio from "./FlavorRadio";
import OrderAccordion from "./OrderAccordion";
import UploadInput from "./UploadInput";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const OrderModal = (props: Props) => {
  return (
      <Modal
        size={{
          md: "xl",
          lg: "2xl",
          xl: "3xl",
          "2xl": "4xl",
        }}
        closeOnOverlayClick={false}
        isOpen={props.isOpen}
        onClose={props.onClose}
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
                <UploadInput />
              </OrderAccordion>
            </Accordion>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="pink"
              mr="10px"
              onClick={props.onClose}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
};

export default OrderModal;
