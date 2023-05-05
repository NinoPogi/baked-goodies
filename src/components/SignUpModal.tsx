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
  Link,
  VStack,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";

import { FieldValues, useForm } from "react-hook-form";
import { CustomerContext } from "../contexts/CustomerProvider";
import apiClient from "../services/api-client";

const SignupModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { customer, setCustomer } = useContext(CustomerContext);
  const [isOpen, setIsOpen] = useState(false);

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

  const onSubmit = (form: FieldValues) => {
    apiClient
      .post("/customer", form)
      .then((res) => setCustomer(res.data))
      .catch((err) => console.error("Error submitting form: ", err.message));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <form id="first" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
          </ModalHeader>
          <ModalBody>
            <Heading pb="20px">Welcome.</Heading>
            {customer.name === "" ? (
              <>
                <Text>
                  Thank you for visiting our app. Please sign up to access all
                  of our features.
                </Text>
                <VStack m="60px  0">
                  <Input
                    borderColor="pink"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p>This field is required</p>}
                  <Input
                    borderColor="pink"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p>Please enter a valid email address</p>
                  )}
                  <Input
                    borderColor="pink"
                    type="text"
                    placeholder="Phone"
                    {...register("phone", {
                      required: true,
                      validate: (value) => {
                        return (
                          value.length === 11 ||
                          "Please enter a valid phone number"
                        );
                      },
                    })}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors.phone && errors.phone.type === "validate" && (
                    <p>{errors.phone.message?.toString()}</p>
                  )}
                </VStack>
              </>
            ) : (
              <Heading fontSize="2xl">Thank You For Signing Up</Heading>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={onClose}>
              Close
            </Button>
            {customer.name === "" ? (
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
