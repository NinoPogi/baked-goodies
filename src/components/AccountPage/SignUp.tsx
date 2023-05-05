import { Dispatch, SetStateAction } from "react";
import { Link, VStack, Heading, Input, Button } from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  useFormContext,
} from "react-hook-form";

interface Props {
  onSubmit: (form: FieldValues) => void;
  setLoginMode: Dispatch<SetStateAction<boolean>>;
}

const SignUp = ({ onSubmit, setLoginMode }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form id="customer" onSubmit={handleSubmit(onSubmit)}>
      <VStack m="60px  0">
        <Heading>Tell Me About Yourself:</Heading>
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
              return value.length === 11 || "Please enter a valid phone number";
            },
          })}
        />
        {errors.phone && errors.phone.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.phone && errors.phone.type === "validate" && (
          <p>{errors.phone.message?.toString()}</p>
        )}
        <Button
          form="customer"
          type="submit"
          colorScheme="pink"
          borderRadius="0 20px 0 20px"
        >
          Sign Up
        </Button>
        <Link fontSize="2xs" onClick={() => setLoginMode(true)}>
          Already Signed Up or Ordered?
        </Link>
      </VStack>
    </form>
  );
};

export default SignUp;
