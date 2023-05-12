import { ReactNode, useContext, useEffect, useState } from "react";
import {
  Stack,
  Link,
  Heading,
  Button,
  Box,
  Input,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  HStack,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  FormLabel,
  Radio,
  RadioGroup,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import CakeCheckbox from "../components/ProductPage/CakeCheckbox";
import CakeInfoAccordion from "../components/ProductPage/CakeInfoAccordion";
import CakeRadio from "../components/ProductPage/CakeRadio";
import CakeShowcase from "../components/ProductPage/CakeShowcase";
import useCakes, { Cake } from "../hooks/useCakes";
import apiClient from "../services/api-client";
import { CustomerContext } from "../contexts/CustomerProvider";

export type CakeCheckboxValues = {
  upgrades: string[];
  addons: string[];
};

export type CakeFormValues = {
  type: string;
  price: string | undefined;
  flavor: string;
  shape: string;
  size: string;
  digits: string;
  bundle: string;
  upgrades: CakeCheckboxValues["upgrades"];
  addons: CakeCheckboxValues["addons"];
  promiseDate: string;
  dedication: string;
  orderDetails: string;
  paymentMethod: string;
  phone: string;
};

const ProductPage = () => {
  const { customer } = useContext(CustomerContext);
  const params = useParams();
  const { data } = useCakes();
  const [cake] = data.filter((obj) => obj.type === params.type);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<CakeFormValues>({
    mode: "onBlur",
    defaultValues: {
      type: cake?.title || "",
    },
  });
  const [radio, setRadio] = useState([0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState<string>();
  const navigate = useNavigate();

  const tabIndicatorColor = useColorModeValue("gray.700", "white");

  useEffect(() => {
    cake.radios.map((radio) => {
      const match = radio.defaultValue.match(/₱(\d+)/);
      match ? setRadio([parseInt(match[1])]) : null;
    });
    sessionStorage.setItem("initializeProduct", "true");
  }, []);

  useEffect(() => {
    document.title = `${cake?.title} | Baked Goodies by H`;

    const addons = getValues("addons");
    const upgrades = getValues("upgrades");

    const ranges =
      addons && upgrades
        ? [...addons, ...upgrades]
        : addons
        ? [...addons]
        : upgrades
        ? [...upgrades]
        : [];

    const estimate: string[] = [];
    const checkbox: number[] = [];
    ranges.forEach((v) => {
      const match = v.match(/₱(\d+)-(\d+)/);
      const matchSingle = v.match(/₱(\d+)/);
      if (match) {
        estimate.push(match[0].replace(/₱/g, ""));
      } else if (matchSingle) {
        checkbox.push(parseInt(matchSingle[1]));
      }
    });

    const total = [...radio, ...checkbox].reduce((acc, val) => acc + val, 0);

    let minSum = 0;
    let maxSum = 0;
    for (const range of estimate) {
      const [min, max] = range.split("-").map(Number);
      minSum += min;
      maxSum += max;
    }

    const result =
      estimate.length !== 0
        ? `${total + minSum}-${total + maxSum}`
        : total.toString();

    setTotal(`₱${result}`);
  }, [getValues()]);

  const handleOrder = async (data: FieldValues) => {
    setIsLoading(true);

    await apiClient.put("/customer", {
      phone: data?.phone,
      paymentMethod: data?.paymentMethod,
    });
    await apiClient.post("/order", data);

    setIsLoading(false);
    window.location.reload();
    setIsSubmitting(false);
  };

  const onConfirm = () => {
    cake.radios.map((radio) =>
      setValue(radio.name as keyof CakeFormValues, radio.defaultValue)
    );
    if (!customer._id) {
      alert("Please Login or Signup First");
    } else {
      setValue("price", total);
      setIsSubmitting(true);
    }
  };

  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      spacing="40px"
      justify="center"
      w="full"
    >
      <Box w="100%">
        <Link as={ReactLink} to="/shop">
          <Heading fontSize="2xl">Back to Cake Shop</Heading>
        </Link>
        <CakeShowcase cake={cake as Cake} />
      </Box>
      <Box w="100%">
        <form id="order" onSubmit={handleSubmit(handleOrder)}>
          <Stack>
            <Heading fontSize="5xl" p="10px">
              {cake?.title.toUpperCase()}
            </Heading>
            <Input display="none" value={cake?.title} {...register("type")} />
            <Input display="none" value={""} {...register("price")} />
            <Tabs variant="unstyled">
              <TabList color="gray.300">
                {cake?.radios.map((radio, index) => (
                  <Tab
                    key={index}
                    _selected={{
                      color: tabIndicatorColor,
                    }}
                  >
                    Select {radio.name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {cake?.radios.map((radio, index) => (
                  <TabPanel key={index}>
                    <FormControl
                      isInvalid={
                        errors[radio.name as keyof typeof errors] ? true : false
                      }
                    >
                      <CakeRadio
                        radio={radio}
                        onChange={(value) => {
                          setValue(radio.name as keyof CakeFormValues, value);
                          const match = value.match(/₱(\d+)/);
                          match ? setRadio([parseInt(match[1])]) : null;
                        }}
                        watch={watch}
                      />
                      <FormErrorMessage>
                        {errors[
                          radio.name as keyof typeof errors
                        ]?.message?.toString()}
                      </FormErrorMessage>
                    </FormControl>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
            <Tabs variant="unstyled">
              <TabList color="gray.300">
                {cake?.checkboxes.map((checkbox, index) => (
                  <Tab
                    key={index}
                    _selected={{
                      color: tabIndicatorColor,
                    }}
                  >
                    Select {checkbox.name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {cake?.checkboxes.map((checkbox, index) => (
                  <TabPanel key={index}>
                    <FormControl
                      isInvalid={
                        errors[checkbox.name as keyof typeof errors]
                          ? true
                          : false
                      }
                    >
                      <CakeCheckbox
                        checkbox={checkbox}
                        onChange={(value) => {
                          setValue(
                            checkbox.name as keyof CakeCheckboxValues,
                            value
                          );
                        }}
                        control={control}
                      />

                      <FormErrorMessage>
                        {errors[
                          checkbox.name as keyof typeof errors
                        ]?.message?.toString()}
                      </FormErrorMessage>
                    </FormControl>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
            {cake.radios.map((radio, index) =>
              watch(radio.name as keyof CakeFormValues) ? (
                <Box display="none" key={index}>
                  {sessionStorage.removeItem("initializeProduct") as ReactNode}
                </Box>
              ) : null
            )}
            {cake.checkboxes.map((checkbox, index) =>
              watch(checkbox.name as keyof CakeFormValues) ? (
                <Box display="none" key={index}>
                  {sessionStorage.removeItem("initializeProduct") as ReactNode}
                </Box>
              ) : (
                <p key={index}>Select your {checkbox.name} (optional)</p>
              )
            )}
            <HStack p="20px" spacing="60px">
              <Button
                size="lg"
                bgGradient="linear(to-r, #ff94c2, #ff6c9d)"
                color="white"
                _hover={{ bgGradient: "linear(to-l, #FF0080, #fc7ebe)" }}
                onClick={onConfirm}
              >
                ORDER NOW
              </Button>
              <Heading fontSize="2xl">{`${
                sessionStorage.getItem("initializeProduct") === "true"
                  ? `Price ${cake?.pricing}`
                  : total
              }`}</Heading>
            </HStack>
            <CakeInfoAccordion heading={cake.title} info={cake.info} />
          </Stack>
          <Modal
            isOpen={isSubmitting}
            onClose={() => setIsSubmitting(false)}
            size="lg"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Order</ModalHeader>
              <ModalBody>
                {isLoading ? (
                  <>
                    <Heading>Submitting..</Heading>
                    <Spinner />
                  </>
                ) : (
                  <>
                    <VStack>
                      <Heading fontSize="xl" mt="10px">
                        {cake.title.toUpperCase()}
                      </Heading>
                      <Heading fontSize="xl" mt="10px">
                        Your Selections
                      </Heading>
                      <ul>
                        {cake.radios.map((radio, index) => (
                          <li key={index}>
                            {radio.name.toUpperCase()}:{" "}
                            {getValues(radio.name as keyof CakeFormValues)}
                          </li>
                        ))}
                        {cake.checkboxes.map((checkbox, index) => (
                          <li key={index}>
                            {checkbox.name.toUpperCase()}:{" "}
                            {getValues(
                              checkbox.name as keyof CakeCheckboxValues
                            )?.length !== 0
                              ? getValues(
                                  checkbox.name as keyof CakeCheckboxValues
                                )
                              : "none"}
                          </li>
                        ))}
                      </ul>
                    </VStack>
                    <FormControl isInvalid={errors.promiseDate ? true : false}>
                      <FormLabel htmlFor="promiseDate">
                        Select Pickup Date:
                      </FormLabel>
                      <Input
                        id="promiseDate"
                        borderRadius="10px"
                        // borderWidth="0"
                        // bg={watch("promiseDate") ? "white" : "transparent"}
                        // color={
                        //   watch("promiseDate")
                        //     ? "black"
                        //     : useColorModeValue("black", "white")
                        // }
                        fontSize="xl"
                        type="date"
                        // shadow={watch("promiseDate") ? "md" : undefined}
                        // _focus={{
                        //   boxShadow: "none",
                        //   borderColor: "transparent",
                        // }}
                        {...register("promiseDate", {
                          required: "Select your Pickup Date",
                          validate: (value) => {
                            const currentDate = new Date();
                            currentDate.setDate(currentDate.getDate() + 2);
                            const inputDate = new Date(value);
                            return (
                              inputDate >= currentDate ||
                              `Date must be after 2 days from now (${new Date(
                                Date.now()
                              ).toLocaleString([], {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                              })})`
                            );
                          },
                        })}
                      />
                      <FormErrorMessage>
                        {errors.promiseDate?.type === "required"
                          ? errors.promiseDate.message
                          : errors.promiseDate?.type === "validate"
                          ? errors.promiseDate.message
                          : "Please enter a valid Date"}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="dedication">Dedication</FormLabel>
                      <Input
                        id="dedication"
                        type="textarea"
                        {...register("dedication")}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="orderDetails">
                        Describe Your Order
                      </FormLabel>
                      <Input
                        id="orderDetails"
                        type="textarea"
                        {...register("orderDetails")}
                      />
                    </FormControl>
                    <FormControl>
                      {customer.paymentMethod ? //   isDisabled //   defaultValue={customer.paymentMethod} //   id="paymentMethod" // <RadioGroup // </FormLabel> //   Payment Method //   <FormLabel htmlFor="paymentMethod">
                      // >
                      //   <HStack align="start">
                      //     <Radio
                      //       {...register("paymentMethod")}
                      //       value="GCash"
                      //       borderColor="pink"
                      //     >
                      //       GCash
                      //     </Radio>
                      //     <Radio
                      //       {...register("paymentMethod")}
                      //       value="BDO"
                      //       borderColor="pink"
                      //     >
                      //       BDO
                      //     </Radio>
                      //     <Radio
                      //       {...register("paymentMethod")}
                      //       value="Cash on Pickup"
                      //       borderColor="pink"
                      //     >
                      //       Cash on Pickup
                      //     </Radio>
                      //   </HStack>
                      // </RadioGroup>
                      null : (
                        <>
                          <FormLabel htmlFor="paymentMethod">
                            Payment Method
                          </FormLabel>
                          <RadioGroup id="paymentMethod" defaultValue="GCash">
                            <HStack align="start">
                              <Radio
                                {...register("paymentMethod")}
                                value="GCash"
                                borderColor="pink"
                              >
                                GCash
                              </Radio>
                              <Radio
                                {...register("paymentMethod")}
                                value="BDO"
                                borderColor="pink"
                              >
                                BDO
                              </Radio>
                              <Radio
                                {...register("paymentMethod")}
                                value="Cash on Pickup"
                                borderColor="pink"
                              >
                                Cash on Pickup
                              </Radio>
                            </HStack>
                          </RadioGroup>
                        </>
                      )}
                    </FormControl>
                    <FormControl isInvalid={Boolean(errors.phone)}>
                      {customer.phone ? //   <Input //   /> //     children="+63" //     pointerEvents="none" //   <InputLeftElement // <InputGroup> //   <FormLabel htmlFor="phone">Phone</FormLabel>
                      //     isDisabled
                      //     value={customer.phone}
                      //     id="phone"
                      //     type="tel"
                      //     placeholder="Enter your phone number"
                      //     borderColor="pink"
                      //   />
                      // </InputGroup>
                      null : (
                        <>
                          <FormLabel htmlFor="phone">Phone</FormLabel>
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children="+63"
                            />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              borderColor="pink"
                              {...register("phone", {
                                // required: true,
                                pattern: /^[1-9]{1}[0-9]{9}$/i,
                              })}
                            />
                          </InputGroup>
                        </>
                      )}
                      <FormErrorMessage>
                        {errors.phone?.type === "required"
                          ? "This field is required"
                          : "Please enter a valid phone number"}
                      </FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  mr="20px"
                  onClick={() => setIsSubmitting(false)}
                >
                  Cancel
                </Button>
                <Button form="order" type="submit" variant="ghost">
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </form>
      </Box>
    </Stack>
  );
};

export default ProductPage;
