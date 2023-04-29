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
        <Input type="text" placeholder="Name" {...register("name")} />
        <Input type="text" placeholder="Email" {...register("email")} />
        <Input type="text" placeholder="Phone" {...register("phone")} />
        {/* <Input type="text" placeholder="Password" /> */}
        {/* <Link fontSize="2xs">Forgot your password?</Link> */}
        <Button form="customer" type="submit">
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
          <Input type="text" placeholder="Email" {...register("email")} />
          <Button form="login" type="submit">
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

        <TableContainer
          overflow="auto"
          w={{ "1sm": "280px", sm: "390px", md: "600px", lg: "900px" }}
          bgColor="white"
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>orderDate</Th>
                <Th>promiseDate</Th>
                <Th>type</Th>
                <Th>flavor</Th>
                <Th>shape</Th>
                <Th>size</Th>
                <Th>digits</Th>
                <Th>upgrades</Th>
                <Th>addons</Th>
                <Th>orderDetails</Th>
                <Th>images</Th>
                <Th>payment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders?.map((order) => (
                <Tr>
                  <Th>{order.orderDate}</Th>
                  <Th>{order.promiseDate}</Th>
                  <Th>{order.type}</Th>
                  <Th>{order.flavor}</Th>
                  <Th>{order.shape}</Th>
                  <Th>{order.size}</Th>
                  <Th>{order.digits}</Th>
                  <Th>{order.upgrades}</Th>
                  <Th>{order.addons}</Th>
                  <Th>{order.orderDetails}</Th>
                  <Th>{order.images}</Th>
                  <Th>{order.payment}</Th>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>orderDate</Th>
                <Th>promiseDate</Th>
                <Th>type</Th>
                <Th>flavor</Th>
                <Th>shape</Th>
                <Th>size</Th>
                <Th>digits</Th>
                <Th>upgrades</Th>
                <Th>addons</Th>
                <Th>orderDetails</Th>
                <Th>images</Th>
                <Th>payment</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    );
  }

  return <>{element}</>;
};

export default AccountPage;
