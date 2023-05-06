import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Link,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  useFormContext,
} from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { CustomerContext } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";

interface Props {
  setLoginMode: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLoginMode }: Props) => {
  const { orders, setData } = useContext(CustomerContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const login = (form: FieldValues) => {
    apiClient
      .post("/customer/login", form)
      .then((res) => setData({ customer: res.data, orders }))
      .catch((err) => {
        if (err.response && err.response.data) {
          setServerError(err.response.data);
        } else {
          console.error("Error logging in: ", err.message);
        }
      });
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
        <FormControl isInvalid={Boolean(serverError)}>
          <VStack>
            <FormErrorMessage>
              {serverError !== "" ? serverError : null}
            </FormErrorMessage>
            <Button colorScheme="pink" type="submit">
              Log in
            </Button>
          </VStack>
        </FormControl>

        <Box mt={4}>
          No account?{" "}
          <Link
            color="pink.500"
            onClick={() => setLoginMode(false)}
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
