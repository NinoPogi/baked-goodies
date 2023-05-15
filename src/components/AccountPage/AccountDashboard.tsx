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
  const [history, setHistory] = useState(false);
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
          <Button onClick={updateProfile} isDisabled>
            Account Info
          </Button>
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
        <Stack
          width={{ base: windowSize.width - 50, xl: windowSize.width - 400 }}
          height={windowSize.height}
          overflow="auto"
          borderRadius="20px"
          background={useColorModeValue("white", "gray.600")}
          padding="20px"
        >
          {history ? (
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
          ) : (
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
        </Stack>
      </Stack>
    </VStack>
  );
};

export default AccountProfile;
