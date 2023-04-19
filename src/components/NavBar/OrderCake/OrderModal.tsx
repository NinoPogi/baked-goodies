import { Dispatch, FormEvent, FormEventHandler, useState } from "react";
import {
  Image,
  Button,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Heading,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  FormLabel,
} from "@chakra-ui/react";
import OrderDescription from "./OrderForm/OrderDescription";
import OrderRadio from "./OrderForm/OrderRadio";
import CustomerInfo from "./OrderForm/CustomerInfo";
import DatesInput from "./OrderForm/DatesInput";
import logo from "../../../assets/logo.svg";
import api from "../../../services/api-client";

interface Props {
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal = ({ loading, setLoading }: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    orderDate: "",
    promiseDate: "",
    customerId: "",
    flavor: "",
    shape: "",
    orderDetails: "",
    images: [],
    payment: "",
  });

  const handleOrder: FormEventHandler = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await api.post("/order", form);
    setLoading(false);
  };

  return (
    <>
      <ModalHeader textAlign="center">
        <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">OrderYourCakeNow.</Heading>
        <form id="order" onSubmit={handleOrder}>
          <VStack spacing="10px">
            <DatesInput form={form} onChange={setForm} />
            <CustomerInfo info={form} onChange={setForm} />
            <FormControl isRequired>
              <FormLabel>Pick Your Cake Flavor:</FormLabel>
              <RadioGroup
                onChange={(event) => {
                  setForm({ ...form, flavor: event });
                }}
              >
                <HStack spacing={4}>
                  <Radio value="Vanilla Chiffon">Vanilla Chiffon</Radio>
                  <Radio value="Choco Chiffon">Choco Chiffon</Radio>
                  <Radio value="Ube Chiffon">Ube Chiffon</Radio>
                  <Radio value="Choco Moist">Choco Moist</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Pick Your Cake Shape:</FormLabel>
              <RadioGroup
                onChange={(event) => {
                  setForm({ ...form, shape: event });
                }}
              >
                <HStack spacing={4}>
                  <Radio value="Circle">Circle</Radio>
                  <Radio value="Square">Square</Radio>
                  <Radio value="Rectangle">Rectangle</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <OrderDescription
              name="orderDetails"
              label="Give Description of Your Cake:"
              form={form}
              setForm={setForm}
              loading={loading}
              setLoading={setLoading}
            />
            <FormControl isRequired>
              <FormLabel>Pick Your Preferred Payment:</FormLabel>
              <RadioGroup
                onChange={(event) => {
                  setForm({ ...form, payment: event });
                }}
              >
                <HStack spacing={4}>
                  <Radio value="Gcash">GCash</Radio>
                  <Radio value="BDO">BDO</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </VStack>
        </form>
      </ModalBody>
      <ModalFooter>
        {loading ? (
          <Button isLoading colorScheme="pink">
            Submit
          </Button>
        ) : (
          <Button form="order" type="submit" colorScheme="pink">
            Submit
          </Button>
        )}
      </ModalFooter>
    </>
  );
};

export default OrderModal;
