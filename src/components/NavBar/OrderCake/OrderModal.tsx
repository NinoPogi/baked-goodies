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
  Divider,
  useToast,
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
  const toast = useToast();
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
    console.log(response);
    toast({
      title: `Order created. ${response.statusText}`,
      description: "Order is now Processing!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
                  <Radio value="Vanilla Chiffon" colorScheme="pink">
                    Vanilla Chiffon
                  </Radio>
                  <Radio value="Choco Chiffon" colorScheme="pink">
                    Choco Chiffon
                  </Radio>
                  <Radio value="Ube Chiffon" colorScheme="pink">
                    Ube Chiffon
                  </Radio>
                  <Radio value="Choco Moist" colorScheme="pink">
                    Choco Moist
                  </Radio>
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
                  <Radio value="Circle" colorScheme="pink">
                    Circle
                  </Radio>
                  <Radio value="Square" colorScheme="pink">
                    Square
                  </Radio>
                  <Radio value="Rectangle" colorScheme="pink">
                    Rectangle
                  </Radio>
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
                  <Radio value="Gcash" colorScheme="pink">
                    GCash
                  </Radio>
                  <Radio value="BDO" colorScheme="pink">
                    BDO
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <Divider orientation="horizontal" />
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
