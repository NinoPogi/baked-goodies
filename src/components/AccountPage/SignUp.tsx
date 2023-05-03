import { Dispatch, SetStateAction } from "react";
import { Link, VStack, Heading, Input, Button } from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (form: FieldValues) => Promise<void>;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const SignUp = ({ register, handleSubmit, onSubmit, setLogin }: Props) => {
  return (
    <form id="customer" onSubmit={handleSubmit(onSubmit)}>
      <VStack m="60px  0">
        <Heading>Tell Me About Yourself:</Heading>
        <Input
          borderColor="pink"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <Input
          borderColor="pink"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <Input
          borderColor="pink"
          type="text"
          placeholder="Phone"
          {...register("phone")}
        />
        {/* <Input type="text" placeholder="Password" /> */}
        {/* <Link fontSize="2xs">Forgot your password?</Link> */}
        <Button
          form="customer"
          type="submit"
          colorScheme="pink"
          borderRadius="0 20px 0 20px"
        >
          Sign Up
        </Button>
        <Link fontSize="2xs" onClick={() => setLogin(true)}>
          Already Signed Up or Ordered?
        </Link>
      </VStack>
    </form>
  );
};

export default SignUp;
