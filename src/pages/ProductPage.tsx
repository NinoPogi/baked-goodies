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
} from "@chakra-ui/react";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import CakeCheckbox from "../components/ProductPage/CakeCheckbox";
import CakeInfoAccordion from "../components/ProductPage/CakeInfoAccordion";
import CakeRadio from "../components/ProductPage/CakeRadio";
import CakeShowcase from "../components/ProductPage/CakeShowcase";
import useCakes from "../hooks/useCakes";
import apiClient from "../services/api-client";
import { CustomerContext } from "../contexts/CustomerProvider";

export type CakeCheckboxValues = {
  upgrades: string[];
  addons: string[];
};

export type CakeFormValues = {
  type: string;
  promiseDate: string;
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
  } = useForm<CakeFormValues>({
    mode: "onBlur",
    defaultValues: {
      type: cake?.title || "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${cake?.title} | Baked Goodies by H`;
  }, []);

  const handleOrder = async (data: FieldValues) => {
    if (!customer._id) {
      alert("please login first");
    } else {
      setIsSubmitting(true);
      await apiClient.post("/order", data);
      setIsSubmitting(false);
      navigate("/account");
    }
  };
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing="40px"
      justify="center"
    >
      <Box w="100%">
        <Link as={ReactLink} to="/shop">
          <Heading fontSize="2xl">Back to Cake Shop</Heading>
        </Link>
        <CakeShowcase cake={cake} />
      </Box>
      <Box w="100%">
        <form onSubmit={handleSubmit(handleOrder)}>
          <Stack>
            <Heading fontSize="5xl">{cake?.title.toUpperCase()}</Heading>
            <Heading fontSize="2xl">{`price ${cake?.pricing}`}</Heading>
            <Input display="none" value={cake?.title} {...register("type")} />
          </Stack>
          <FormControl isInvalid={errors.promiseDate ? true : false}>
            <Stack direction="row" alignItems="center">
              <Heading fontSize="2xl">SELECT PROMISE DATE:</Heading>
              {errors.promiseDate && (
                <FormErrorMessage>
                  {errors.promiseDate.message}
                </FormErrorMessage>
              )}
            </Stack>
            <Input
              borderRadius="0"
              borderColor="pink.500"
              bg={watch("promiseDate") ? "pink.400" : "transparent"}
              color={
                watch("promiseDate")
                  ? "white"
                  : useColorModeValue("black", "white")
              }
              fontSize="xl"
              type="date"
              {...register("promiseDate", {
                required: "This field is required",
                validate: (value) => {
                  const currentDate = new Date();
                  currentDate.setDate(currentDate.getDate() + 2);
                  const inputDate = new Date(value);
                  return (
                    inputDate >= currentDate ||
                    "Date must be after 2 days from now"
                  );
                },
              })}
            />
          </FormControl>

          {cake?.radios.map((radio) => (
            <FormControl
              key={radio.name}
              isInvalid={
                errors[radio.name as keyof typeof errors] ? true : false
              }
            >
              <CakeRadio
                radio={radio}
                onChange={(value) =>
                  setValue(radio.name as keyof CakeFormValues, value)
                }
                control={control}
              />
              <FormErrorMessage>
                {errors[radio.name as keyof typeof errors]?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
          ))}
          {cake?.checkboxes.map((checkbox) => (
            <FormControl
              key={checkbox.name}
              isInvalid={
                errors[checkbox.name as keyof typeof errors] ? true : false
              }
            >
              <CakeCheckbox
                checkbox={checkbox}
                onChange={(value) =>
                  setValue(checkbox.name as keyof CakeCheckboxValues, value)
                }
                control={control}
              />
              <FormErrorMessage>
                {errors[
                  checkbox.name as keyof typeof errors
                ]?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
          ))}

          <Button type="submit" size="lg" mt="8">
            ORDER NOW
          </Button>
          <CakeInfoAccordion heading={cake.title} info={cake.info} />
          <Modal isOpen={isSubmitting} onClose={() => console.log("heelo")}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Submitting Order...</ModalHeader>
              <ModalBody>
                <Stack direction="row" justify="center" spacing="2">
                  <Spinner />
                  <Box>Processing your order. Please wait...</Box>
                </Stack>
              </ModalBody>
              <ModalFooter />
            </ModalContent>
          </Modal>
        </form>
      </Box>
    </Stack>
  );
};

export default ProductPage;
