import { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CustomerContext } from "../../contexts/CustomerProvider";
import { useNavigate } from "react-router-dom";
import useMutate from "../../hooks/useMutate";

const SignUp = () => {
  const { customer } = useContext(CustomerContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState({
    pass: false,
    confirm: false,
  });
  const { mutation: signUpMutation, serverError } = useMutate("/customer");
  const navigate = useNavigate();

  const signUp = (form: FieldValues) => {
    signUpMutation.mutate(form);
    navigate("/account");
  };

  if (customer._id) {
    return <Heading> Hello {customer.name}</Heading>;
  } else {
    return (
      <form id="customer" onSubmit={handleSubmit(signUp)}>
        <VStack spacing={8} mt={8} mx="auto" maxWidth="md">
          <Heading size="lg">Sign Up:</Heading>

          <FormControl
            isInvalid={Boolean(errors.email) || Boolean(serverError)}
          >
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
              {serverError !== ""
                ? serverError
                : errors.email?.type === "required"
                ? "This field is required"
                : "Please enter a valid email address"}
            </FormErrorMessage>
          </FormControl>
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
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword.pass ? "text" : "password"}
                placeholder="Enter your password"
                borderColor="pink"
                {...register("password", {
                  required: true,
                  minLength: 5,
                })}
              />
              <InputRightElement>
                {showPassword.pass ? (
                  <FaEyeSlash
                    aria-label="Hide password"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        pass: !showPassword.pass,
                      })
                    }
                  />
                ) : (
                  <FaEye
                    aria-label="Show password"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        pass: !showPassword.pass,
                      })
                    }
                  />
                )}
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
            <InputGroup>
              <Input
                id="confirmPassword"
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm your password"
                borderColor="pink"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
              <InputRightElement>
                {showPassword.confirm ? (
                  <FaEyeSlash
                    aria-label="Hide password"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm: !showPassword.confirm,
                      })
                    }
                  />
                ) : (
                  <FaEye
                    aria-label="Show password"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm: !showPassword.confirm,
                      })
                    }
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.confirmPassword?.type === "required"
                ? "This field is required"
                : errors.confirmPassword?.message?.toString()}
            </FormErrorMessage>
          </FormControl>

          <Box textAlign="center">
            <Button type="submit" isLoading={isSubmitting}>
              Sign Up
            </Button>
            <Box mt={4}>
              Already have an account?{" "}
              <Link
                color="pink.500"
                onClick={() => {
                  navigate("/account");
                  reset();
                }}
                cursor="pointer"
              >
                Log in here.
              </Link>
            </Box>
          </Box>
        </VStack>
      </form>
    );
  }
};

export default SignUp;
