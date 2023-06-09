import { BaseSyntheticEvent, useContext, useState } from "react";
import {
  VStack,
  Text,
  Stack,
  Avatar,
  Input,
  Button,
  Box,
  useColorModeValue,
  AvatarBadge,
  SimpleGrid,
} from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { CustomerContext, defaultState } from "../../contexts/CustomerProvider";
import apiClient from "../../services/api-client";
import OrderCart from "./OrderCart";
import getCroppedImageUrl from "../../services/image-url";
import { WindowSizeContext } from "../../contexts/WindowSizeProvider";

const AccountProfile = () => {
  const { windowSize } = useContext(WindowSizeContext);
  const { customer, orders } = useContext(CustomerContext);
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("My Orders");
  const avatar = new FormData();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
      .then(() => {
        queryClient.setQueryData("/customer", {
          customer: defaultState.customer,
          orders: defaultState.orders,
        });
        sessionStorage.removeItem("isLoggedIn");
      })
      .catch((err) => console.error("Error logging out: ", err.message));
  };

  return (
    <VStack>
      <Stack direction={{ base: "column", xl: "row" }} spacing={4}>
        <Stack direction={{ base: "row", xl: "column" }}>
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
          <SimpleGrid spacing="10px" columns={{ base: 2, xl: 1 }}>
            <Text>Welcome, {customer?.name}</Text>
            <Button onClick={() => setPage("Account Info")}>
              Account Info
            </Button>
            <Button onClick={() => setPage("My Orders")}>My Orders</Button>
            <Button onClick={() => setPage("History")}>History</Button>
            <Button
              onClick={() => {
                navigate("/shop");
              }}
            >
              Order Now
            </Button>
            <Button onClick={logout}>Log Out</Button>
          </SimpleGrid>
        </Stack>
        <Stack
          width={{ base: windowSize.width - 50, xl: windowSize.width - 400 }}
          height={windowSize.height}
          overflow="auto"
          borderRadius="20px"
          background={useColorModeValue("white", "gray.600")}
          padding="20px"
        >
          {page === "History" && (
            <OrderCart
              orders={orders
                .filter((obj) => obj.isDone === true)
                .sort((a, b) => {
                  const dateA = new Date(a.orderDate);
                  const dateB = new Date(b.orderDate);
                  if (dateA > dateB) {
                    return -1;
                  } else if (dateA > dateB) {
                    return 1;
                  } else {
                    return 0;
                  }
                })}
            >
              History
            </OrderCart>
          )}
          {page === "My Orders" && (
            <OrderCart
              orders={orders
                .filter((obj) => obj.isDone === false)
                .sort((a, b) => {
                  if (a.isRush && !b.isRush) {
                    return -1;
                  } else if (!a.isRush && b.isRush) {
                    return 1;
                  } else {
                    const dateA = new Date(a.orderDate);
                    const dateB = new Date(b.orderDate);
                    if (dateA > dateB) {
                      return -1;
                    } else if (dateA > dateB) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }
                })}
            >
              My Orders
            </OrderCart>
          )}
          {page === "Account Info" && (
            <Box>
              <Text>Account Info</Text>
              <VStack align="left">
                <Text>Id: {customer._id}</Text>
                <Text>Name: {customer.name}</Text>
                <Text>Email: {customer.email}</Text>
                <Text>Phone: {customer.phone}</Text>
                <Text>Preferred Payment: {customer.paymentMethod}</Text>
                {/* <Button onClick={updateProfile} isDisabled>
                  Edit Account
                </Button> */}
              </VStack>
            </Box>
          )}
        </Stack>
      </Stack>
    </VStack>
  );
};

export default AccountProfile;
