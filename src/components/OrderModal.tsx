import {
  BaseSyntheticEvent,
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import {
  Image,
  Input,
  ModalCloseButton,
  ModalHeader,
  Modal,
  ModalContent,
  ModalOverlay,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  ModalBody,
  ModalFooter,
  Radio,
  RadioGroup,
  VStack,
  useToast,
  InputGroup,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import logo from "../images/logo.svg";
import apiClient from "../services/api-client";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

interface Props {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const OrderModal = ({ isOpen, onClose, customer, form, setForm }: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const formImages = new FormData();

  const handleName = (event: any) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };
  const handleEmail = (event: any) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };
  const handlePhone = (event: any) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  let propsName = {};
  let propsEmail = {};
  let propsPhone = {};

  if (customer.name !== "") {
    propsName = {
      value: customer.name,
      isReadOnly: true,
    };
    propsEmail = {
      value: customer.email,
      isReadOnly: true,
    };
    propsPhone = {
      value: customer.phone,
      isReadOnly: true,
    };
  }

  const handleDate = (event: any) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
      orderDate: dayjs().format("YYYY-MM-DD"),
    });
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleImages = async (event: BaseSyntheticEvent) => {
    for (const file of event.target.files) {
      formImages.append("imageUpload", file);
    }
    try {
      setLoading(true);
      const response = await apiClient.post("/upload", formImages);
      setForm({ ...form, images: response.data });
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleOrder: FormEventHandler = async (event: FormEvent) => {
    event.preventDefault();
    const response = await apiClient.post("/order", form);
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
        <ModalHeader textAlign="center">
          <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p="5px 30px 0 30px">
          <Heading pb="20px">OrderYourCakeNow.</Heading>
          <form id="order" onSubmit={handleOrder}>
            <VStack spacing="10px">
              <FormControl>
                <FormLabel>Order Date:</FormLabel>
                <Input
                  type="text"
                  value={dayjs().format("MM/DD/YYYY")}
                  isReadOnly
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Promise Date: </FormLabel>
                <Input
                  name="promiseDate"
                  type="date"
                  placeholder="Promise Date"
                  onChange={handleDate}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Name:</FormLabel>
                <InputGroup>
                  <Input
                    name="name"
                    type="text"
                    placeholder="example: Hazel"
                    onChange={handleName}
                    {...propsName}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Email Address:</FormLabel>
                <Input
                  name="email"
                  type="text"
                  placeholder="example: bakedgoodies@gmail.com"
                  onChange={handleEmail}
                  {...propsEmail}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Phone Number:</FormLabel>
                <Input
                  name="phone"
                  type="text"
                  placeholder="example: 09771243342"
                  onChange={handlePhone}
                  {...propsPhone}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Tell Me What You Want Your Cake To Look Like:
                </FormLabel>
                <Textarea
                  name="orderDetails"
                  onChange={handleInputChange}
                  placeholder="example: Gusto ko po ng cake na .... 
          (Write Dedications & U can upload up to 5 pics)"
                  size="sm"
                />
              </FormControl>
              <FormControl>
                <Text pb="6px">or Upload Photo/s:</Text>
                <Flex gap="20px">
                  <Input
                    w="340px"
                    p="6px"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImages}
                    multiple
                  />
                </Flex>
              </FormControl>
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
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
