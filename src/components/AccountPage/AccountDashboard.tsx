import { useContext, useState } from "react";
import {
  VStack,
  Text,
  Heading,
  Stack,
  Avatar,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomerContext } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";
import OrderTable from "./OrderTable";
import OrderCart from "./OrderCart";

const AccountProfile = () => {
  const { customer } = useContext(CustomerContext);
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [password, setPassword] = useState("");

  const updateProfile = () => {
    apiClient
      .put(`/customer/${customer?._id}`, { name, email, phone, password })
      .catch((err) => console.error("Error updating profile: ", err.message));
  };

  const logout = () => {
    apiClient
      .get("/customer/logout")
      .then(() => sessionStorage.removeItem("isLoggedIn"))
      .catch((err) => console.error("Error logging out: ", err.message));
  };

  return (
    <VStack>
      <Stack direction={{ base: "column", xl: "row" }} spacing={6}>
        <Avatar size="2xl" name={customer?.name} />
        <Stack spacing={3}>
          <Heading>Welcome, {customer?.name}</Heading>
          <Button onClick={updateProfile}>Edit Account</Button>
          <Button onClick={updateProfile}>Order Now </Button>
          <Button onClick={logout}>Log Out</Button>
        </Stack>
        {/* <OrderTable /> */}
        <OrderCart />
      </Stack>
    </VStack>
  );
};

export default AccountProfile;
