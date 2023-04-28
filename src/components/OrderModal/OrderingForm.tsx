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
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const OrderingForm = ({ customer, form, setForm }: Props) => {
  const toast = useToast();
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
  };
  return (
    <>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">OrderYourCakeNow.</Heading>
        <form id="order" onSubmit={handleOrder}>
          <VStack spacing="10px">
            <DatesInput form={form} onChange={setForm} />
            <CustomerInfo customer={customer} info={form} onChange={setForm} />
            <OrderDescription
              name="orderDetails"
              label="Tell Me What You Want Your Cake To Looklike:"
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
                  <Radio value="Cash On Pickup" colorScheme="pink">
                    Cash On Pickup
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
