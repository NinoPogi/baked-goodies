import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button, Heading, Link, Input, VStack } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { Customer } from "../hooks/useCustomer";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/AccountPage/SignUp";
import Login from "../components/AccountPage/Login";
import OrderTable from "../components/AccountPage/OrderTable";
import useOrder from "../hooks/useOrder";

interface Props {
  customer: Customer;
  setCustomer: Dispatch<SetStateAction<any>>;
}

const AccountPage = ({ customer, setCustomer }: Props) => {
  const { register, handleSubmit } = useForm();
  const { orders } = useOrder(customer);
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
      <OrderTable orders={orders} />
      <Link fontSize="2xs" onClick={logout}>
        Goodbye?
      </Link>
    </VStack>
  ) : login !== false ? (
    <Login
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      setLogin={setLogin}
    />
  ) : (
    !login && (
      <SignUp
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setLogin={setLogin}
      />
    )
  );
};

export default AccountPage;
