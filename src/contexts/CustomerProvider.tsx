import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
} from "react";
import useCustomer, { CustomerOrdersData } from "../hooks/useCustomer";
import usePusher from "../hooks/usePusher";
import { useToast } from "@chakra-ui/react";

interface CustomerContextInterface {
  customer: CustomerOrdersData["customer"];
  setData: Dispatch<SetStateAction<CustomerOrdersData>>;
  orders: CustomerOrdersData["orders"];
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

  useEffect(() => {
    if (data.customer._id) sessionStorage.setItem("isLoggedIn", "true");
  }, [data.customer._id]);

  const { pusher, channel } = usePusher(data.customer._id);
  const toast = useToast();

  useEffect(() => {
    const handleOrderEvent = ({ type, payload }: any) => {
      const orders = [...data.orders];
      if (type === "create") {
        toast({
          title: "New order created!",
          description: `Order ID: ${payload._id}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        orders.push(payload);
      } else if (type === "update") {
        const index = orders.findIndex((o) => o._id === payload._id);
        if (index !== -1) {
          orders[index] = payload;
          toast({
            title: "Order updated!",
            description: `Order ID: ${payload._id}`,
            status: "info",
            duration: 3000,
            isClosable: true,
          });
        }
      } else if (type === "delete") {
        const index = orders.findIndex((o) => o._id === payload._id);
        if (index !== -1) {
          orders.splice(index, 1);
        }
      }

      setData({ customer: data.customer, orders });
    };

    channel.bind("order-event", handleOrderEvent);

    return () => {
      channel.unbind("order-event", handleOrderEvent);
    };
  }, [channel, data, setData, toast]);

  return (
    <CustomerContext.Provider
      value={{
        customer: data.customer,
        orders: data.orders,
        setData,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
