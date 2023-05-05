import { Dispatch, SetStateAction } from "react";
import { Link, VStack, Heading, Input, Button } from "@chakra-ui/react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  useFormContext,
} from "react-hook-form";

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

  return (
    <form id="login" onSubmit={handleSubmit(onSubmit)}>
      <VStack m="60px  0">
        <Heading>Enter Your Email:</Heading>
        <Input
          borderColor="pink"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors?.email && errors?.email.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.email && errors?.email.type === "pattern" && (
          <p>Please enter a valid email address</p>
        )}
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
