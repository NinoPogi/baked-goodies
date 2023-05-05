import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { FieldValues, useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  onSubmit: (form: FieldValues) => void;
  setLoginMode: (loginMode: boolean) => void;
}

const SignUp = ({ onSubmit, setLoginMode }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form id="customer" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8} mt={8} mx="auto" maxWidth="md">
        <Heading size="lg">Tell Me About Yourself:</Heading>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            colorScheme="pink"
            borderColor="pink"
            {...register("name", { required: true })}
          />
          <FormErrorMessage>This field is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            colorScheme="pink"
            borderColor="pink"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          <FormErrorMessage>
            {errors.email?.type === "required"
              ? "This field is required"
              : "Please enter a valid email address"}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.phone)}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children="+63" />
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              colorScheme="pink"
              borderColor="pink"
              {...register("phone", {
                required: true,
                pattern: /^[1-9]{1}[0-9]{9}$/i,
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.phone?.type === "required"
              ? "This field is required"
              : "Please enter a valid phone number"}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              colorScheme="pink"
              borderColor="pink"
              {...register("password", {
                required: true,
                minLength: 5,
              })}
            />
            <InputRightElement>
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                variant="ghost"
                onClick={() => setShowPassword(!showPassword)}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password?.type === "required"
              ? "This field is required"
              : "Password must be at least 5 characters long"}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.confirmPassword)}>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            colorScheme="pink"
            borderColor="pink"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          <FormErrorMessage>
            {errors.confirmPassword?.type === "required"
              ? "This field is required"
              : errors.confirmPassword?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.gender)}>
          <FormLabel htmlFor="paymentMethod">Payment Method</FormLabel>
          <RadioGroup
            id="paymentMethod"
            defaultValue="GCash"
            onChange={(value) => setValue("paymentMethod", value)}
          >
            <HStack align="start">
              <Radio
                {...register("paymentMethod")}
                value="GCash"
                colorScheme="pink"
                borderColor="pink"
              >
                GCash
              </Radio>
              <Radio
                {...register("paymentMethod")}
                value="BDO"
                colorScheme="pink"
                borderColor="pink"
              >
                BDO
              </Radio>
              <Radio
                {...register("paymentMethod")}
                value="Cash on Pickup"
                colorScheme="pink"
                borderColor="pink"
              >
                Cash on Pickup
              </Radio>
            </HStack>
          </RadioGroup>

          <FormErrorMessage>This field is required</FormErrorMessage>
        </FormControl>
        <Box textAlign="center">
          <Button colorScheme="pink" type="submit">
            Sign Up
          </Button>
          <Box mt={4}>
            Already have an account?{" "}
            <Link
              color="pink.500"
              onClick={() => setLoginMode(true)}
              cursor="pointer"
            >
              Log in here.
            </Link>
          </Box>
        </Box>
      </VStack>
    </form>
  );
};

export default SignUp;
