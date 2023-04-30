import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
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
import { FieldValues, useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import logo from "../images/logo.svg";
import apiClient from "../services/api-client";
import { Customer } from "../hooks/useCustomer";

interface Props {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const OrderModal = ({ isOpen, onClose, customer, form, setForm }: Props) => {
  const { handleSubmit, register, control } = useForm();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const formImages = new FormData();

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

  const handleOrder = async (submit: FieldValues) => {
    const req = { ...form, ...submit };
    const response = await apiClient.post("/order", req);
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
          <form id="order" onSubmit={handleSubmit(handleOrder)}>
            <VStack spacing="10px">
              <FormControl>
                <FormLabel>Order Date:</FormLabel>
                <Input
                  type="text"
                  value={dayjs().format("MM/DD/YYYY")}
                  isReadOnly
                  {...register("orderDate")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Promise Date: </FormLabel>
                <Input
                  type="date"
                  placeholder="Promise Date"
                  {...register("promiseDate")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Name:</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="example: Hazel"
                    {...propsName}
                    {...register("name")}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Email Address:</FormLabel>
                <Input
                  type="text"
                  placeholder="example: bakedgoodies@gmail.com"
                  {...propsEmail}
                  {...register("email")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Your Phone Number:</FormLabel>
                <Input
                  type="text"
                  placeholder="example: 09771243342"
                  {...propsPhone}
                  {...register("phone")}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Tell Me What You Want Your Cake To Look Like:
                </FormLabel>
                <Textarea
                  placeholder="example: Gusto ko po ng cake na .... 
          (Write Dedications & U can upload up to 5 pics)"
                  size="sm"
                  {...register("orderDetails")}
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
                <Controller
                  name="payment"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
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
                  )}
                />
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
            <Button
              form="order"
              type="submit"
              colorScheme="pink"
              onClick={onClose}
            >
              Submit
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
