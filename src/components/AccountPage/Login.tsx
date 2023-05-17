import { useState } from "react";
import {
  Link,
  VStack,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useMutate from "../../hooks/useMutate";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { mutation: loginMutation, serverError } = useMutate("/customer/login");
  const navigate = useNavigate();

  const login = (form: FieldValues) => {
    loginMutation.mutate(form);
  };

  return (
    <form id="login" onSubmit={handleSubmit(login)}>
      <VStack spacing={8} mt={8} mx="auto" maxWidth="md">
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
              })}
            />
            <InputRightElement>
              {showPassword ? (
                <FaEyeSlash
                  aria-label="Hide password"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  aria-label="Show password"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>This field is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(serverError)}>
          <VStack>
            <FormErrorMessage>
              {serverError !== "" ? serverError : null}
            </FormErrorMessage>
            <Button type="submit">Log in</Button>
          </VStack>
        </FormControl>
        <Link
          color="pink.500"
          onClick={() => {
            alert("Just Don't Forgot Your Password!");
            reset();
          }}
          cursor="pointer"
        >
          Forgot password?
        </Link>
        <Box mt={4}>
          No account?{" "}
          <Link
            color="pink.500"
            onClick={() => {
              navigate("/account/signup");
              reset();
            }}
            cursor="pointer"
          >
            Sign up here.
          </Link>
        </Box>
      </VStack>
    </form>
  );
};

export default Login;
