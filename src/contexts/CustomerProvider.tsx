import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import useCustomer, {
  Customer,
  CustomerOrdersData,
  Order,
} from "../hooks/useCustomer";
import { Channel } from "pusher-js";
import usePusher from "../hooks/usePusher";
import { useToast } from "@chakra-ui/react";

interface CustomerContextInterface {
  customer: CustomerOrdersData["customer"];
  setData: Dispatch<SetStateAction<CustomerOrdersData>>;
  orders: CustomerOrdersData["orders"];
  // channel: Channel | null;
}

interface Props {
  children: ReactNode;
}

const defaultState: CustomerContextInterface = {
  customer: {
    _id: "",
    avatar: "",
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
  },
  orders: [],
  setData: () => {},
};

export const CustomerContext =
  createContext<CustomerContextInterface>(defaultState);

export default function CustomerProvider({ children }: Props) {
  const { data, setData } = useCustomer({
    customer: defaultState.customer,
    orders: defaultState.orders,
  });

  data.customer._id ? sessionStorage.setItem("isLoggedIn", "true") : null;

  const { pusher, channel } = usePusher(data.customer._id);
  const toast = useToast();

  useEffect(() => {
    channel.bind("customer-event", (data: any) => {
      setData(data);
    });

    channel.bind("order-event", ({ type, payload }: any) => {
      if (type === "create") {
        data.orders.push(payload);
      } else if (type === "update") {
        const index = data.orders.findIndex((o) => o._id === payload._id);
        if (index !== -1) {
          data.orders[index] = payload;
        }
      } else if (type === "delete") {
        const index = data.orders.findIndex((o) => o._id === payload._id);
        if (index !== -1) {
          data.orders.splice(index, 1);
        }
      }
      setData({ ...data });

      if (type === "create") {
        toast({
          title: "New order created!",
          description: `Order ID: ${payload._id}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else if (type === "update") {
        toast({
          title: "Order updated!",
          description: `Order ID: ${payload._id}`,
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      } else if (type === "delete") {
        toast({
          title: "Order deleted!",
          description: `Order ID: ${payload._id}`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    return () => {
      pusher.unsubscribe(`customer-${data.customer._id}`);
    };
  }, []);

  return (
    <CustomerContext.Provider
      value={{ customer: data.customer, orders: data.orders, setData }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
