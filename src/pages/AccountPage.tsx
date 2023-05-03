import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  Heading,
  Link,
  Input,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { Customer } from "../hooks/useCustomer";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/AccountPage/SignUp";
import Login from "../components/AccountPage/Login";
import OrderTable from "../components/AccountPage/OrderTable";
import useOrder, { Order } from "../hooks/useOrder";
import OrderModal from "../components/AccountPage/OrderModal";
import { CustomerContext } from "../contexts/CustomerProvider";

const AccountPage = () => {
  const { customer, setCustomer } = useContext(CustomerContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState(false);
  const [order, setOrder] = useState<Order>();
  const { data } = useOrder(customer);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Hello ${customer?.name} | Baked Goodies by H`;
  }, [customer]);

  const onSubmit = async (form: FieldValues) => {
    const customer = await apiClient.post("/customer", form);
    setCustomer(customer.data);
    navigate("/");
  };

  const logout = () => {
    apiClient.get("/customer/logout");
    setCustomer({ ...customer, name: "" });
  };

  return customer?.name !== "" ? (
    <VStack>
      <Heading>Welcome Back {customer?.name}</Heading>
      <OrderTable orders={data} onOpen={onOpen} setOrder={setOrder} />
      <OrderModal order={order} isOpen={isOpen} onClose={onClose} />
      <Link fontSize="2xs" onClick={logout}>
        Log Out?
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
