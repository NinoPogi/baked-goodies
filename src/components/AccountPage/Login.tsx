import { Dispatch, SetStateAction } from "react";
import { Link, VStack, Heading, Input, Button } from "@chakra-ui/react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (form: FieldValues) => Promise<void>;
  setLoginMode: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ register, handleSubmit, onSubmit, setLoginMode }: Props) => {
  return (
    <form id="login" onSubmit={handleSubmit(onSubmit)}>
      <VStack m="60px  0">
        <Heading>Enter Your Email:</Heading>
        <Input
          borderColor="pink"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <Button
          form="login"
          type="submit"
          colorScheme="pink"
          borderRadius="0 20px 0 20px"
        >
          Login
        </Button>
        <Link fontSize="2xs" onClick={() => setLoginMode(false)}>
          Sign Up?
        </Link>
      </VStack>
    </form>
  );
};

export default Login;
