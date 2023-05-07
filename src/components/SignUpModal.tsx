import { useState, useEffect, useContext } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Image,
  Text,
  Input,
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";

import { FieldValues, useForm } from "react-hook-form";
import { CustomerContext } from "../contexts/CustomerProvider";
import apiClient from "../services/api-client";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SignupModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const { customer } = useContext(CustomerContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("firsVisit");
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("firsVisit", "done");
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  const signUp = (form: FieldValues) => {
    apiClient
      .post("/customer", form)
      .then(() => sessionStorage.setItem("isLoggedIn", "true"))
      .catch((err) => console.error("Error signing up: ", err.message));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <form id="first" onSubmit={handleSubmit(signUp)}>
          <ModalHeader>
            <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
          </ModalHeader>
          <ModalBody>
            <Heading pb="20px">Welcome.</Heading>
            {customer._id === "" ? (
              <>
                <Text>
                  Thank you for visiting our app. Please sign up to access all
                  of our features.
                </Text>
                <VStack spacing={8} mt={8} mx="auto" maxWidth="md">
                  <FormControl isInvalid={Boolean(errors.name)}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
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
                        borderColor="pink"
                        {...register("password", {
                          required: true,
                          minLength: 5,
                        })}
                      />
                      <InputRightElement>
                        <IconButton
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
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
                    <FormLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FormLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      borderColor="pink"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword?.type === "required"
                        ? "This field is required"
                        : errors.confirmPassword?.message?.toString()}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={Boolean(errors.gender)}>
                    <FormLabel htmlFor="paymentMethod">
                      Payment Method
                    </FormLabel>
                    <RadioGroup
                      id="paymentMethod"
                      defaultValue="GCash"
                      onChange={(value) => setValue("paymentMethod", value)}
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

                    <FormErrorMessage>This field is required</FormErrorMessage>
                  </FormControl>
                </VStack>
              </>
            ) : (
              <Heading fontSize="2xl">Thank You For Signing Up</Heading>
            )}
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            {customer._id === "" ? (
              <Button type="submit" form="first" variant="ghost">
                Submit
              </Button>
            ) : null}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
