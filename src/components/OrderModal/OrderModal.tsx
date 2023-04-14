import { FormEvent, useEffect, useState } from "react";
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
import axios from "axios";
import DescriptionArea from "./DescriptionArea";
import FlavorRadio from "./OrderRadio";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const OrderModal = (props: Props) => {
  const [flavor, setFlavor] = useState("Choco Moist");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState({
    flavor: "",
    description: "",
  });

  useEffect(() => {
    setForm({ flavor: flavor, description: description });
  }, [flavor, description]);
  const data = new FormData();

  const handleUpload = (event: any) => {
    data.append("imageUpload", event.target.files[0]);
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/upload/", data).then((res) => {
      console.log(res.statusText);
    });
    console.log(form);
  };

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
          <form id="orderForm" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="">Pick your Flavor</FormLabel>
              <FlavorRadio setFlavor={setFlavor} />
              <DescriptionArea
                description={description}
                setDescription={setDescription}
              />
              or Upload Photo:
              <Input
                p="6px"
                variant="unstyled"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleUpload}
                multiple
              />
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
