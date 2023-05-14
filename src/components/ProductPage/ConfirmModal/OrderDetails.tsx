import { useContext } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { CustomerContext } from "../../../contexts/CustomerProvider";
import { ConfirmFormValues } from "../ConfirmModal";

interface Props {
  register: UseFormRegister<ConfirmFormValues>;
  errors: FieldErrors<ConfirmFormValues>;
}

const OrderDetails = ({ register, errors }: Props) => {
  const { customer } = useContext(CustomerContext);
  return (
    <VStack>
      <Input
        display="none"
        {...register("promiseDate", {
          required: true,
        })}
      />
      <FormControl>
        <FormLabel htmlFor="dedication">Dedication</FormLabel>
        <Input
          id="dedication"
          type="textarea"
          size="lg"
          {...register("dedication")}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="orderDetails">Describe Your Order</FormLabel>
        <Input
          id="orderDetails"
          type="textarea"
          size="lg"
          {...register("orderDetails")}
        />
      </FormControl>
      <FormControl>
        {customer.paymentMethod ? null : (
          <>
            <FormLabel htmlFor="paymentMethod">Payment Method</FormLabel>
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
        {customer.phone ? null : (
          <>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children="+63" />
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                borderColor="pink"
                {...register("phone", {
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
    </VStack>
  );
};

export default OrderDetails;
