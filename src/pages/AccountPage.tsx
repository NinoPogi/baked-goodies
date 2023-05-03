import { useContext, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Heading, Link, VStack, useDisclosure } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/AccountPage/SignUp";
import Login from "../components/AccountPage/Login";
import OrderTable from "../components/AccountPage/OrderTable";
import { Order } from "../hooks/useOrders";
import OrderModal from "../components/AccountPage/OrderModal";
import { CustomerContext } from "../contexts/CustomerProvider";

const AccountPage = () => {
  const { customer, setCustomer, orders } = useContext(CustomerContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const [loginMode, setLoginMode] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Account | Baked Goodies by H`;
  }, []);

  const onSubmit = async (form: FieldValues) => {
    try {
      const customerData = await apiClient.post("/customer", form);
      setCustomer(customerData.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const logout = () => {
    try {
      setCustomer({ _id: "", name: "", email: "", phone: "", orders: [] });
      apiClient.get("/customer/logout");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (customer?.name !== "") {
    return (
      <VStack>
        <Heading>Welcome Back {customer?.name}</Heading>
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
        <Link fontSize="2xs" onClick={logout}>
          Log Out?
        </Link>
      </VStack>
    );
  } else if (loginMode) {
    return (
      <Login
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setLoginMode={setLoginMode}
      />
    );
  } else {
    return (
      <SignUp
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setLoginMode={setLoginMode}
      />
    );
  }
};

export default AccountPage;
