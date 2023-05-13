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
  Text,
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
import ConfirmModal from "../components/ProductPage/ConfirmModal";

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
};

const ProductPage = () => {
  const { customer } = useContext(CustomerContext);
  const { data } = useCakes();
  const params = useParams();
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
  const [total, setTotal] = useState<string>();
  const [form, setForm] = useState({});
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

  const handleOrder = (data: FieldValues) => {
    cake.radios.map((radio) =>
      setValue(radio.name as keyof CakeFormValues, radio.defaultValue)
    );
    if (!customer._id) {
      alert("Please Login or Signup First");
    } else {
      setValue("price", total);
      setForm(data);
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
          <Text fontSize="2xl">Back to Cake Shop</Text>
        </Link>
        <CakeShowcase cake={cake as Cake} />
      </Box>
      <Box w="100%">
        <form id="order" onSubmit={handleSubmit(handleOrder)}>
          <Stack>
            <Text fontSize="5xl" p="10px">
              {cake?.title.toUpperCase()}
            </Text>
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
                type="submit"
                form="order"
                size="lg"
                bgGradient="linear(to-r, #ff94c2, #ff6c9d)"
                color="white"
                _hover={{ bgGradient: "linear(to-l, #FF0080, #fc7ebe)" }}
              >
                ORDER NOW
              </Button>
              <Text fontSize="2xl">{`${
                sessionStorage.getItem("initializeProduct") === "true"
                  ? `Price ${cake?.pricing}`
                  : cake?.title === "Pullapart Cupcake"
                  ? `Price ${cake?.pricing}`
                  : total
              }`}</Text>
            </HStack>
            <CakeInfoAccordion heading={cake.title} info={cake.info} />
          </Stack>
          <ConfirmModal
            cake={cake as Cake}
            form={form}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            getValues={getValues}
          />
        </form>
      </Box>
    </Stack>
  );
};

export default ProductPage;
