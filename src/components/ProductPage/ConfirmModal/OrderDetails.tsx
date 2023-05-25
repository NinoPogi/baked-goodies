import { BaseSyntheticEvent, useContext } from "react";
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
  Textarea,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { CustomerContext } from "../../../contexts/CustomerProvider";
import { ConfirmFormValues } from "../ConfirmModal";

interface Props {
  register: UseFormRegister<ConfirmFormValues>;
  errors: FieldErrors<ConfirmFormValues>;
  handleFileUpload: (e: BaseSyntheticEvent) => void;
}

const OrderDetails = ({ register, errors, handleFileUpload }: Props) => {
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
        <Input id="dedication" size="lg" {...register("dedication")} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="orderDetails">Describe Your Order</FormLabel>
        <Textarea id="orderDetails" size="lg" {...register("orderDetails")} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="images">Upload Your Design:</FormLabel>
        <InputGroup>
          <Input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileUpload}
            multiple
          />
        </InputGroup>
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
                  pattern: /^(09|9)[0-9]{9}$/i,
                })}
              />
            </InputGroup>
          </>
        )}
        <FormErrorMessage>
          {errors.phone && "Please enter a valid phone number"}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default OrderDetails;
