import {
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Modal,
  ModalOverlay,
  FormControl,
  FormLabel,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import DescriptionArea from "./DescriptionArea";
import FlavorRadio from "./FlavorRadio";

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
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p="30px">
          <form
            id="orderForm"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Submitted!!");
            }}
          >
            <FormControl>
              <FormLabel>Pick your Flavor</FormLabel>
              <FlavorRadio />
              <FormLabel pt="30px">Describe</FormLabel>
              <DescriptionArea />
              or Upload Photo:
              <Input p="6px" variant="unstyled" type="file" />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button form="orderForm" type="submit" colorScheme="pink">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
