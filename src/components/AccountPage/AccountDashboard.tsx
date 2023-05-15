import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import {
  VStack,
  Text,
  Heading,
  Stack,
  Avatar,
  Input,
  Button,
  useDisclosure,
  Badge,
  Box,
  AvatarBadge,
} from "@chakra-ui/react";
import { CustomerContext } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";
import OrderCart from "./OrderCart";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import getCroppedImageUrl from "../../services/image-url";
import { Order } from "../../hooks/useCustomer";

const AccountProfile = () => {
  const { customer, orders } = useContext(CustomerContext);
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState(false);
  const avatar = new FormData();
  const navigate = useNavigate();

  const handleFileUpload = (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    avatar.append("imageUpload", file);
    apiClient
      .post("/upload", avatar)
      .then((res) => apiClient.put("/customer", { avatar: res.data[0] }));
  };

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

  console.log(orders.filter((obj) => obj.isDone === false));

  return (
    <VStack>
      <Stack direction={{ base: "column", xl: "row" }} spacing={4}>
        <Box pos="relative" display="inline-block">
          <Avatar
            size="xl"
            name={customer?.name}
            src={getCroppedImageUrl(customer?.avatar)}
          >
            <label htmlFor="file-upload">
              <AvatarBadge color="teal" cursor="pointer">
                <FaCamera size="15px" />

                <Input
                  id="file-upload"
                  display="none"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                />
              </AvatarBadge>
            </label>
          </Avatar>
        </Box>
        <Stack spacing={3}>
          <Text>Welcome, {customer?.name}</Text>
          <Button onClick={() => setHistory(false)}>My Orders</Button>
          <Button onClick={() => setHistory(true)}>History</Button>
          <Button onClick={updateProfile} isDisabled>
            Edit Account
          </Button>
          <Button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Order Now{" "}
          </Button>
          <Button onClick={logout}>Log Out</Button>
        </Stack>
        {history ? (
          <OrderCart orders={orders.filter((obj) => obj.isDone === true)}>
            History
          </OrderCart>
        ) : (
          <OrderCart orders={orders.filter((obj) => obj.isDone === false)}>
            Orders
          </OrderCart>
        )}
      </Stack>
    </VStack>
  );
};

export default AccountProfile;
