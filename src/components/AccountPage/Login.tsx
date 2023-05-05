import { Dispatch, SetStateAction, useState } from "react";
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

interface Props {
  onSubmit: (form: FieldValues) => void;
  setLoginMode: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ onSubmit, setLoginMode }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form id="login" onSubmit={handleSubmit(onSubmit)}>
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

        <Button colorScheme="pink" type="submit">
          Log in
        </Button>
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
