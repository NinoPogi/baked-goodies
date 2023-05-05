import { ReactNode, useContext, useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import {
  Heading,
  Text,
  Link,
  VStack,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import apiClient from "../services/api-client";
import SignUp from "../components/AccountPage/SignUp";
import Login from "../components/AccountPage/Login";
import OrderTable from "../components/AccountPage/OrderTable";
import OrderModal from "../components/AccountPage/OrderModal";
import { CustomerContext } from "../contexts/CustomerProvider";
import { Order } from "../hooks/useCustomer";

const AccountPage = () => {
  const { customer, setData, orders } = useContext(CustomerContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loginMode, setLoginMode] = useState<boolean>(true);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const methods = useForm();

  useEffect(() => {
    document.title = `Account | Baked Goodies by H`;
  }, []);

  const signUp = (form: FieldValues) => {
    apiClient
      .post("/customer", form)
      .then((res) => setData({ customer: res.data, orders }))
      .catch((err) => console.error("Error signing up: ", err.message));
  };

  const login = (form: FieldValues) => {
    apiClient
      .post("/customer/login", form)
      .then((res) => setData({ customer: res.data, orders }))
      .catch((err) => console.error("Error signing up: ", err.message));
  };

  const logout = () => {
    setData({
      customer: { _id: "", name: "", email: "", phone: "", orders: [] },
      orders: [],
    });
    apiClient
      .get("/customer/logout")
      .catch((err) => console.error("Error logging out: ", err.message));
  };

  let element: ReactNode;
  if (customer?.name !== "") {
    element = (
      <VStack>
        <Heading>Welcome Back {customer?.name}</Heading>
        <Stack>
          <Text>Account Email: {customer?.email}</Text>
          <Text>Account Phone: {customer?.phone}</Text>
          <Link fontSize="2xs" onClick={logout}>
            Log Out?
          </Link>
        </Stack>
        <OrderTable
          orders={orders}
          onOpen={onOpen}
          setSelectedOrder={setSelectedOrder}
        />
        <OrderModal
          selectedOrder={selectedOrder}
          isOpen={isOpen}
          onClose={onClose}
        />
      </VStack>
    );
  } else if (loginMode) {
    element = <Login onSubmit={login} setLoginMode={setLoginMode} />;
  } else {
    element = <SignUp onSubmit={signUp} setLoginMode={setLoginMode} />;
  }
  return <FormProvider {...methods}>{element}</FormProvider>;
};

export default AccountPage;
