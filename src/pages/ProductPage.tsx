import { useContext, useEffect, useState } from "react";
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

    setTotal(result);
  }, [getValues()]);

  const handleOrder = async (data: FieldValues) => {
    if (!customer._id) {
      alert("please login first");
    } else {
      setIsLoading(true);
      await apiClient.post("/order", data);
      setIsLoading(false);
      navigate("/account");
    }
  };

  const onConfirm = () => {
    setValue("price", total);
    setIsSubmitting(true);
  };

  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      spacing="40px"
      justify="center"
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
              watch(radio.name as keyof CakeFormValues) ? null : (
                <p key={index}>Select your {radio.name}</p>
              )
            )}
            {cake.checkboxes.map((checkbox, index) =>
              watch(checkbox.name as keyof CakeFormValues) ? null : (
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
                total !== "0" ? `₱${total}` : `Price ${cake?.pricing}`
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
                            )}
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
                        borderWidth="0"
                        bg={watch("promiseDate") ? "white" : "transparent"}
                        color={
                          watch("promiseDate")
                            ? "black"
                            : useColorModeValue("black", "white")
                        }
                        fontSize="xl"
                        type="date"
                        shadow={watch("promiseDate") ? "md" : undefined}
                        _focus={{
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
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
                      <FormLabel htmlFor="paymentMethod">
                        Payment Method
                      </FormLabel>
                      {customer.paymentMethod ? (
                        <RadioGroup
                          id="paymentMethod"
                          defaultValue={customer.paymentMethod}
                          isDisabled
                        >
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
                      ) : (
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
                      )}
                    </FormControl>
                    {watch("promiseDate") ? (
                      errors.promiseDate ? (
                        <p>{errors.promiseDate?.message}</p>
                      ) : null
                    ) : (
                      <p>Select your Pickup Date</p>
                    )}
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
