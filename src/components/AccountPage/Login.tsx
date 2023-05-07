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
import { FieldValues, useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { CustomerContext } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { orders, setData } = useContext(CustomerContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const login = (form: FieldValues) => {
    apiClient
      .post("/customer/login", form)
      .then((res) => {
        setData(res.data);
        reset();
        sessionStorage.setItem("isLoggedIn", "true");
      })
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
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                variant="ghost"
                onClick={() => setShowPassword(!showPassword)}
              />
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
