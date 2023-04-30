import { Dispatch, SetStateAction, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  HStack,
  Heading,
  Input,
  Link,
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import api from "../services/api-client";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, setLogin] = useBoolean();

  useEffect(() => {
    document.title = "Hello | Baked Goodies by H";
  }, []);

  const onSubmit = async (form: FieldValues) => {
    const customer = await api.post("/customer", form);
    setCustomer(customer.data);
  };
  let element = (
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
        <Link fontSize="2xs" onClick={setLogin.toggle}>
          Already said Hello?
        </Link>
      </VStack>
    </form>
  );
  if (login === true) {
    element = (
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
          <Link fontSize="2xs" onClick={setLogin.toggle}>
            Hello?
          </Link>
        </VStack>
      </form>
    );
  }
  if (customer.name !== "") {
    element = (
      <VStack>
        <Heading>Welcome Back {customer.name}</Heading>
      </VStack>
    );
  }

  return <>{element}</>;
};

export default AccountPage;
