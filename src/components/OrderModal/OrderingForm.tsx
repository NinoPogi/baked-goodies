import {
  useState,
  FormEventHandler,
  FormEvent,
  Dispatch,
  SetStateAction,
  BaseSyntheticEvent,
} from "react";
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Divider,
  useToast,
  Button,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import CustomerInfo from "./OrderingForm/CustomerInfo";
import DatesInput from "./OrderingForm/DatesInput";
import OrderDescription from "./OrderingForm/OrderDescription";
import api from "../../services/api-client";

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  customer: Customer;
  setStatus: Dispatch<SetStateAction<string>>;
}

const OrderingForm = ({ customer, setStatus }: Props) => {
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
  const [loading, setLoading] = useState(false);
  const formImages = new FormData();

  const handleImages = async (event: BaseSyntheticEvent) => {
    for (const file of event.target.files) {
      formImages.append("imageUpload", file);
    }
    try {
      setLoading(true);
      const response = await api.post("/upload", formImages);
      setForm({ ...form, images: response.data });
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleOrder: FormEventHandler = async (event: FormEvent) => {
    event.preventDefault();
    const response = await api.post("/order", form);
    console.log(response);
    toast({
      title: `Order created. ${response.statusText}`,
      description: "Order is now Processing!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setStatus("processing");
  };
  return (
    <>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">OrderYourCakeNow.</Heading>
        <form id="order" onSubmit={handleOrder}>
          <VStack spacing="10px">
            <DatesInput form={form} onChange={setForm} />
            <CustomerInfo customer={customer} info={form} onChange={setForm} />
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
                  <Radio value="Round" colorScheme="pink">
                    Round
                  </Radio>
                  <Radio value="Heart 4x2" colorScheme="pink">
                    Heart 4x2
                  </Radio>
                  <Radio value="Heart 7x2" colorScheme="pink">
                    Heart 7x2
                  </Radio>
                  <Radio value="Heart 7x4" colorScheme="pink">
                    Heart 7x4
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <OrderDescription
              name="orderDetails"
              label="Give Description of Your Cake:"
              form={form}
              setForm={setForm}
              handleImages={handleImages}
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
          <Button isLoading loadingText="Uploading" colorScheme="pink">
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

export default OrderingForm;
