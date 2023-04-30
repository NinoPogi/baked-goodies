import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button, Heading, Link, Input, VStack } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { Customer } from "../hooks/useCustomer";
import { useNavigate } from "react-router-dom";

interface Order {
  _id: string;
  orderDate: string;
  promiseDate: string;
  customer: Customer;
  type: string;
  flavor: string;
  shape: string;
  size: string;
  digits: string;
  upgrades: string[];
  addons: string[];
  orderDetails: string;
  images: string[];
  status: string;
  isPaid: string;
  payment: string;
}

interface Props {
  customer: Customer;
  setCustomer: Dispatch<SetStateAction<any>>;
  orders: Order[] | undefined;
}

const AccountPage = ({ customer, setCustomer, orders }: Props) => {
  const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Hello | Baked Goodies by H";
  }, []);

  const onSubmit = async (form: FieldValues) => {
    const customer = await apiClient.post("/customer", form);
    setCustomer(customer.data);
    navigate("/");
  };

  const logout = () => {
    apiClient.get("/customer/logout");
    setCustomer({ name: "" });
  };

  return customer.name !== "" ? (
    <VStack>
      <Heading>Welcome Back {customer.name}</Heading>
      <Link fontSize="2xs" onClick={logout}>
        Goodbye?
      </Link>
    </VStack>
  ) : login !== false ? (
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
          Submit
        </Button>
        <Link fontSize="2xs" onClick={() => setLogin(false)}>
          Hello?
        </Link>
      </VStack>
    </form>
  ) : (
    !login && (
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
            Submit
          </Button>
          <Link fontSize="2xs" onClick={() => setLogin(true)}>
            Already said Hello?
          </Link>
        </VStack>
      </form>
    )
  );
};

export default AccountPage;
