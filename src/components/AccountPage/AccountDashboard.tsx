import { useContext, useState } from "react";
import {
  VStack,
  Text,
  Heading,
  Stack,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import OrderModal from "./OrderModal";
import OrderTable from "./OrderTable";
import { Order } from "../../hooks/useCustomer";
import { CustomerContext } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";

const AccountDashboard = () => {
  const { customer, orders, setData } = useContext(CustomerContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const logout = () => {
    setData({
      customer: { _id: "", name: "", email: "", phone: "", orders: [] },
      orders: [],
    });
    apiClient
      .get("/customer/logout")
      .catch((err) => console.error("Error logging out: ", err.message));
  };

  return (
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
};

export default AccountDashboard;
