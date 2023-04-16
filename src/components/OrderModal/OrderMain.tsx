import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import {
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  ModalHeader,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import OrderDescription from "./OrderDescription";
import FlavorRadio from "./OrderRadio";

const OrderModal = () => {
  const [form, setForm] = useState({
    flavor: "",
    description: "",
    images: [],
  });
  const [flavor, setFlavor] = useState("Vanilla Chiffon");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const formImages = new FormData();

  useEffect(() => {
    setForm({ ...form, flavor, description });
  }, [flavor, description, images]);

  const handleRadio = (event: string) => {
    setFlavor(event);
  };

  const handleUpload = (event: BaseSyntheticEvent) => {
    setImages(event.target.files);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    for (let file of images) {
      formImages.append("imageUpload", file);
    }
    try {
      console.log(images);
      const response = await axios.post(
        "http://localhost:3000/upload",
        formImages
      );
      setForm({ ...form, images: response.data });
      console.log(form);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <ModalContent>
        <ModalHeader textAlign="center">
          OrderYourCakeNow Form
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p="30px">
          <form id="orderForm" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="">Pick your Flavor</FormLabel>
              <FlavorRadio onChange={handleRadio} />
              <OrderDescription
                description={description}
                setDescription={setDescription}
              />
              or Upload Photo:
              <Input
                position={{ sm: "relative", md: "absolute" }}
                w="230px"
                p="6px"
                variant="unstyled"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleUpload}
                multiple
              />
              <Image src="" />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button form="orderForm" type="submit" colorScheme="pink">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default OrderModal;
